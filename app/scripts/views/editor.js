define(['backbone', 'sketch'], function (Backbone) {

  var EditorView = Backbone.View.extend({
    tagName: 'canvas',
    height: 300,
    width: 300,
    initialize: function () {
      return this.render();
    },
    render: function () {
      this.$el.attr({height: this.height, width: this.width}).sketch();
      return this;
    }
  });

  return EditorView;
});