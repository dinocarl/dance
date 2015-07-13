(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/plansview'
		],
		function( Plansview ) {

			describe('Plansview Compositeview', function () {

				it('should be an instance of Plansview Compositeview', function () {
					var plansview = new Plansview();
					expect( plansview ).to.be.an.instanceof( Plansview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );