define([
  'backbone',
  'hbs!tmpl/item/plan'
],
function( Backbone, template  ) {
  'use strict';
  return Backbone.Marionette.ItemView.extend({
    template: template,
    tagName: 'tr',
    events: {},
    ui: {},
    initialize: function() {
      // console.log("init Planview");
      return this;
    },
    onRender: function() {
      // console.log("rndr Planview");
      return this;
    }
  });
});
