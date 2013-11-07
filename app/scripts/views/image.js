/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'vent'
], function ($, _, Backbone, JST, vent) {
  'use strict';

  var ImageView = Backbone.View.extend({
    template: _.template('<img src="<%= src %>" width="100%" />'),
    model: Backbone.Model.extend({src: ''}),
    initialize: function () {
      var perPage = 10;
      var query = {
        method: 'flickr.photos.search',
        api_key: '<API-KEY>',
        tags: 'landscape',
        page: Math.floor(Math.random() * 500),
        per_page: perPage,
        sort: 'interestingness-desc',
        safe_search: 1
      };

      var that = this;

      $.getJSON('http://api.flickr.com/services/rest?' + $.param(query) + '&format=json&jsoncallback=?',
        function (data) {
          var index = Math.floor(Math.random() * perPage);
          var onePhoto = data.photos.photo[index];
          var t_url = "http://farm" + onePhoto.farm +
            ".static.flickr.com/" + onePhoto.server + "/" +
            onePhoto.id + "_" + onePhoto.secret + ".jpg"; // add _t or _m before .jpg for a thumbnail

          that.model.src = t_url;
          that.render();

        });
    },
    render: function () {

      var that = this;

      this.$el.html(this.template(this.model));

      this.$el.find('img').load(function () {
        vent.trigger('imageLoaded', that.$el.width(), that.$el.height());
      });

      return this;
    }
  });

  return ImageView;
});
