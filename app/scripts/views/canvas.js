/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/panel',
  'vent'
], function ($, _, Backbone, JST, PanelView, vent) {
  'use strict';

  var CanvasView = Backbone.View.extend({
    id: 'canvas',
    template: JST['app/scripts/templates/canvas.ejs'],
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template());
      var that = this;

      Backbone.Collection.prototype.partition = function (width) {
        return _.values(this.groupBy(function (e, index) {
          return Math.floor(index / width);
        }));
      };

      _.each(this.collection.partition(this.collection.rowWidth), function (rowOfPanels) {
        var row = $('<div/>').addClass('row container');

        _.each(rowOfPanels, function (panel) {
          var panelView = new PanelView({model: panel});
          row.append(panelView.el);
        });
        $(that.el).append(row);
      });

      return this;
    }
  });

  return CanvasView;
});