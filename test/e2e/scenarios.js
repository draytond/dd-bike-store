'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('bikeStoreApp', function() {

	describe('overview of all bikes', function(){
		beforeEach(function() {
	    	browser.get('app/index.html');
	  	});

		it('should filter the list of bikes based on the search field input', function(){
			var bikeList = element.all(by.repeater('bike in bikes'));
			var search = element(by.model('bikeFilter'));

			expect(bikeList.count()).toBe(5);

			search.sendKeys('best');
			expect(bikeList.count()).toBe(1);

			search.clear();
			search.sendKeys('ca');
			expect(bikeList.count()).toBe(3);
		});
	});
});
