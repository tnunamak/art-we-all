/*global define*/

define([
  'underscore',
  'backbone',
  'collections/panelCollection'
], function (_, Backbone, PanelCollection) {
  'use strict';

  var CanvasModel = Backbone.Model.extend({
    defaults: {
      panels: new PanelCollection()
    }
  });

  return CanvasModel;
});