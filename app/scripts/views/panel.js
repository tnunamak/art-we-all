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
      var that = this;
      vent.on("editorInitialized", function (editor) {
        that.editor = editor;
      });
      this.render();
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.css({display: 'inline-block'});
    },
    loadFromEditor: function () {
      if (this.editor) {
        var panel = this.$el.find('> canvas')[0];
        var panelContext = panel.getContext('2d');
        panelContext.drawImage(this.editor.el, 0, 0, $(panel).width(), $(panel).height())
      }
    }
  });

  return PanelView;
});