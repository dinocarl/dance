define([
  'backbone',
  'views/item/plan'
], function (Backbone, PlanItemView) {
  'use strict';
  return Backbone.Marionette.CollectionView.extend({
    childView: PlanItemView,
    tagName: 'table',
    className: 'plans table table-striped'
  });
});
