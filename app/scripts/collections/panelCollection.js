/*global define*/

define([
  'underscore',
  'backbone',
  'models/panel'
], function (_, Backbone, PanelModel) {
  'use strict';

  var PanelCollection = Backbone.Collection.extend({
    model: PanelModel,
    rowWidth: 0
  });

  return PanelCollection;
});