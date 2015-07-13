define([
  'backbone',
  'models/plan'
],
function( Backbone, Plan ) {
  'use strict';
  return Backbone.Collection.extend({
    model: Plan,
    url: 'data/plans.json',
    sortkey: 'valuation',
    defcomp: function(item, key){
      return -item.get(key);
    },
    comparator: function(item){
      return this.defcomp(item, this.sortkey);
    },
    initialize: function() {
      this.listenTo(Backbone, "sortplans", this.sortByField);
    },
    sortByField: function(fieldName) {
      // this.comparator = this.strategies[fieldName]();
      this.comparator = fieldName;
      this.sort();
    },
    strategies: {
      carrierName: function (item) { console.log(item); return -item.get("carrierName"); }, 
      planName: function (item) { return -item.get("planName"); },
    }
  });
});
