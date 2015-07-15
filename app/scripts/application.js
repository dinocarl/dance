define([
  'backbone',
  'communicator',
  'views/layout/base'
],
function( Backbone, Communicator, BaseLayout ) {
  'use strict';
  return Backbone.Marionette.Application.extend({
    initialize: function() {
      var baselayout = new BaseLayout();
      baselayout.render();
      Communicator.mediator.trigger("APP:START");
    }
  });
});
