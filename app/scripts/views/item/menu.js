define([
  'backbone',
  'models/Page',
  'views/item/page',
  'hbs!tmpl/item/menu'
], function (Backbone, Page, PageView, template) {
  'use strict';

  return Backbone.Marionette.ItemView.extend({
    template: template,
    tagName: 'li',
    events: {
      'click a': 'activateMenu'
    },
    ui: {
      link: 'a'
    },
    modelEvents: {
      "change:active": function() { this.render(); }
    },

    // activateMenu: function (event) {
    //   window.App.vent.trigger('menu:activate', this.model);
    //   window.App.main.show(new PageView({model: this.model}));
    // },

    onRender: function() {
      if(this.model.get('active')) this.$el.addClass('active');
    }
  });
});
