define([
  'backbone',
  'communicator',
  'collections/pages',
  'collections/plans',
  'views/collection/menus',
  'views/composite/plans',
  'views/item/footer'
],
function( Backbone, Communicator, Pages, PlansCollection, MenuView, PlansView, FooterView ) {
  'use strict';
  var App, header, footer, plans, plansdata, links; 
  App = new Backbone.Marionette.Application();

  /* Add application regions here */
  App.addRegions({
    header: '#header',
    footer: '#footer',
    content: '#content'
  });
  
  links = new Pages();
  links.fetch();
  
  plansdata = new PlansCollection();
  plansdata.fetch();
  
  header = new MenuView({collection: links});
  footer = new FooterView();
  plans  = new PlansView({collection: plansdata});

  /* Add initializers here */
  App.addInitializer(function () {
    App.header.show(header);
    App.footer.show(footer);
    App.content.show(plans);
    Communicator.mediator.trigger("APP:START");
  });
  
  return App;
});
