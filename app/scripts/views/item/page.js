define([
  'backbone',
  'hbs!tmpl/item/page',
  'underscore',
], function (Backbone, template, _) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: template,
    ui: {
      header: 'h2'
    },

    onBeforeRender: function(){
      this.model.set('content', _.result(templates.pages, this.model.get('name')))
    }

  });
});
