define(['views/canvas',
  'views/image',
  'views/editor',
  'views/panel',
  'models/panel',
  'collections/panelCollection',
  'vent'], function (CanvasView, ImageView, EditorView, PanelView, Panel, PanelCollection, vent) {


  var image = new ImageView();
  $("#image").append(image.$el);

  vent.on('imageLoaded', function (width, height) {

    var aspectRatio = width / height;

    var numRows = 6;

    var panelWidth = width / numRows;
    var panelHeight = panelWidth / aspectRatio;

    var numPanels = numRows * numRows;

    var panels = new PanelCollection(
      _.reduce(_.range(numPanels), function (memo, i) {
        memo.push({
          width: panelWidth,
          height: panelHeight
        });

        return memo;
      }, [])
    );

    panels.rowWidth = Math.round(width / panelWidth);

    console.log(panelHeight);

    var canvas = new CanvasView({ collection: panels });
    $("#image").append(canvas.$el);

    var editor = new EditorView();
    editor.aspectRatio = aspectRatio;
    editor.render();
    $("#editor").append(editor.$el);

  });


});