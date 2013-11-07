/*global require*/
'use strict';

require.config({
  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    sketch: {
      deps: ['jquery'],
      exports: 'sketch'
    }
  },
  paths: {
    sketch: '../bower_components/sketch.js/index',
    jquery: '../bower_components/jquery/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    bootstrap: 'vendor/bootstrap'
  }
});

require([
  'backbone',
  'app'
], function (Backbone) {
  Backbone.history.start();
});
