(function() {
	'use strict';

	var root = this;

	root.define([
		'models/plan'
		],
		function( Plan ) {

			describe('Plan Model', function () {

				it('should be an instance of Plan Model', function () {
					var plan = new Plan();
					expect( plan ).to.be.an.instanceof( Plan );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );