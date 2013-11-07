/**
 * http://stackoverflow.com/questions/11609825/backbone-js-how-to-communicate-between-views?rq=1
 */
define(['backbone'], function (Backbone) {
  var vent = {};

  _.extend(vent, Backbone.Events);

  return vent;
});