'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('bikeStoreApp', function() {

	describe('overview of all bikes', function() {
		beforeEach(function() {
	    	browser.get('app/index.html');
	  	});

		it('should filter the list of bikes based on the search field input', function() {
			var bikeList = element.all(by.repeater('bike in bikes'));
			var search = element(by.model('bikeFilter'));

			expect(bikeList.count()).toBe(5);

			search.sendKeys('best');
			expect(bikeList.count()).toBe(1);

			search.clear();
			search.sendKeys('ca');
			expect(bikeList.count()).toBe(3);
		});

		it('should change order based on the selected option', function() {
			var bikes = element.all(by.repeater('bike in bikes')
				.column('{{bike.name}}'));
			var orderByHeight = element(by.model('order')).
				element(by.css('option[value="sizeAndWeight.dimensions[1]"]'));
			var search = element(by.model('bikeFilter'));
			search.sendKeys('ca');

			function bikeNames() {
				return bikes.map(function(bikeName) {
					return bikeName.getText();
				});
			}

			expect(bikeNames()).toEqual([ 
				'Captain America Kick Butt Bike',
				'Freestyle Stunt Bike',
				'The Machine' 
			]);

			orderByHeight.click();

			expect(bikeNames()).toEqual([
				'Captain America Kick Butt Bike',
				'The Machine',
				'Freestyle Stunt Bike' 
			]);
		});
	});
});
