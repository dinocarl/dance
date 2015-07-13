define([
  'backbone'
],
function( Backbone ) {
  'use strict';
  return Backbone.Model.extend({
    defaults: {
      carrierName: '',
      planName: '',
      copay: 0,
      premium: 0,
      annualLimit: 0,
      valuation: 0
    },
    initialize: function() {
      this.set("valuation", this.valuation(this.get("copay"), this.get("premium"), this.get("annualLimit")));
    },
    factor: function(num){
      var initval = Math.pow(10, (num.toString().length - 1));
      return initval;
    },
    weight: function(num){
      var divisor = this.factor(num);
      var invertedvalue = num / divisor / divisor;
      var subfrom = Math.pow(10, (-num.toString().length + 2));
      return subfrom - invertedvalue;
    },
    valuation: function(copay, premium, limit){
      return (this.weight(copay) * this.weight(premium) * limit);
    }
    
  });
});
