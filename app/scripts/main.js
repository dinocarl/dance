require([
  'backbone',
  'application',
  'regionManager'
],
function ( Backbone, App ) {
  'use strict';
  var app = new App();
  app.start();
});
