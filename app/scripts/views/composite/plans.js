define([
  'backbone',
  'views/item/plan',
  'hbs!tmpl/composite/plans'
],
function( Backbone, PlanView, template ) {
  'use strict';
  return Backbone.Marionette.CompositeView.extend({
    childViewContainer: '#plans-content',
    childView: PlanView,
    template: template,
    ui: {
      reorder: '#headerrow th',
      reset: '.reset'
    },
    events: {
      'click @ui.reorder': 'reOrder',
      'click @ui.reset': 'reset'
    },

    initialize: function() {
      console.log("init composite Plansview");
      return this;
    },

    onRender: function() {
      console.log("rndr composite Plansview");
      return this;
    },

    reOrder: function(e) {
      Backbone.trigger("sortplans", $(e.target).data("id"));
    },

    reset: function() {
      Backbone.trigger("sortplans", 'valuation');
    }

  });
});
