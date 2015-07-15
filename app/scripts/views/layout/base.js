define([
  'backbone',
  'communicator',
  'collections/pages',
  'collections/plans',
  'views/collection/menus',
  'views/composite/plans',
  'views/item/footer',
  'hbs!tmpl/layout/base'
],
function( Backbone, Communicator, Pages, PlansCollection, MenuView, PlansView, FooterView, template ) {
  'use strict';
  return Backbone.Marionette.LayoutView.extend({
    el: 'body',
    template: template,
    regions:{
      header: '#header',
      footer: '#footer',
      content: '#content',
      notifications: '#notifications'
    },

    onRender : function() {
      var header, footer, plans, plansdata, links; 
      links = new Pages();
      links.fetch();
      
      plansdata = new PlansCollection();
      plansdata.fetch();
      
      header = new MenuView({collection: links});
      footer = new FooterView();
      plans  = new PlansView({collection: plansdata});

      this.header.show(header);
      this.footer.show(footer);
      this.content.show(plans);
    }

  });
});
