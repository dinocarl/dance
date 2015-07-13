define([
	'backbone',
	'hbs!tmpl/item/footer'
], function (Backbone, template) {
	'use strict';

	return Backbone.Marionette.ItemView.extend({
		template: template
	});
});