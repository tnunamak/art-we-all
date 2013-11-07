define(['backbone', 'vent', 'sketch'], function (Backbone, vent) {

  var EditorView = Backbone.View.extend({
    tagName: 'canvas',
    width: 700,
    render: function () {
      this.$el.attr({height: this.width / this.aspectRatio, width: this.width}).sketch();
      vent.trigger('editorInitialized', this);
      return this;
    }
  });

  return EditorView;
});