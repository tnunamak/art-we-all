/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'vent',
  'sketch'
], function ($, _, Backbone, JST, vent) {
  'use strict';

  var PanelView = Backbone.View.extend({
    events: {
      "click": "loadFromEditor"
    },
    tagName: 'div',
    className: 'canvasPanel',
    width: 100,
    height: 100,
    template: JST['app/scripts/templates/panel.ejs'],
    initialize: function () {
      this.render();
      var that = this;
      vent.on("editorInitialized", function (editor) {
        that.editor = editor;
      });
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.css({display: 'inline-block'});
    },
    loadFromEditor: function () {
      if (this.editor) {
        var panelContext = this.$el.find('> canvas')[0].getContext('2d');
        panelContext.drawImage(this.editor.el, 0, 0, this.width, this.height)
      }
    }
  });

  return PanelView;
});