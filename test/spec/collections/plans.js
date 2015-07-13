(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/plans'
		],
		function( Plans ) {

			describe('Plans Collection', function () {

				it('should be an instance of Plans Collection', function () {
					var plans = new Plans();
					expect( plans ).to.be.an.instanceof( Plans );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );