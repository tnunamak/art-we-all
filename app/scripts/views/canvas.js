/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/panel'
], function ($, _, Backbone, JST, PanelView) {
  'use strict';

  var CanvasView = Backbone.View.extend({
    template: JST['app/scripts/templates/canvas.ejs'],
    initialize: function () {
      this.render();
    },
    render: function () {
      this.$el.html(this.template());
      var that = this;

      var rowWidth = Math.ceil(Math.sqrt(this.collection.length));

      Backbone.Collection.prototype.partition = function (width) {
        return _.values(this.groupBy(function (e, index) {
          return Math.floor(index / width);
        }));
      };

      _.each(this.collection.partition(rowWidth), function (rowOfPanels) {
        var row = $('<div/>').addClass('row');

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