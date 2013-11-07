/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var PanelModel = Backbone.Model.extend({
    defaults: {
      label: 'T',
      color: 'grey',
      width: 100,
      height: 100
    }
  });

  return PanelModel;
});