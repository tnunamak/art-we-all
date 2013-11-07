define(['views/canvas',
  'views/editor',
  'views/panel',
  'models/panel',
  'collections/panelCollection',
  'vent'], function (CanvasView, EditorView, PanelView, Panel, PanelCollection, vent) {

  var panels = new PanelCollection([
    { color: 'blue' },
    { color: 'red' },
    { color: 'darkgreen' },
    {},
    {},
    {},
    {},
    {},
    {}
  ]);

  var canvas = new CanvasView({el: $("#canvas"), collection: panels});
  var editor = new EditorView();
  $("#editor").append(editor.$el);

  vent.trigger('editorInitialized', editor);

});