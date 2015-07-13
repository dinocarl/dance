define([
  'backbone',
  'views/item/menu'
], function (Backbone, MenuItemView) {
  'use strict';
  return Backbone.Marionette.CollectionView.extend({
    childView: MenuItemView,
    tagName: 'ul',
    className: 'nav nav-pills pull-right'
  });
});
