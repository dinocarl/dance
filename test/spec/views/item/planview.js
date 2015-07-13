(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/planview'
		],
		function( Planview ) {

			describe('Planview Itemview', function () {

				it('should be an instance of Planview Itemview', function () {
					var planview = new Planview();
					expect( planview ).to.be.an.instanceof( Planview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );