'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('bikeStoreApp', function() {
	it('should redirect index.html to index.html#/bikes', function() {
		browser.get('app/index.html');
		browser.getLocationAbsUrl().then(function(url) {
			expect(url.split('#')[1]).toBe('/bikes');
		});
	});

	describe('overview of all bikes', function() {
	  	beforeEach(function() {
			browser.get('app/index.html#/bikes');
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

		it('should render bike-specific links', function() {
			var search = element(by.model('bikeFilter'));
			search.sendKeys('machine');
			element.all(by.css('li a')).first().click();
			browser.getLocationAbsUrl().then(function(url) {
				expect(url.split('#')[1]).toBe('/details/machine');
			});
		});

		describe('Bike detail view', function() {
			beforeEach(function() {
				browser.get('app/index.html#/details/machine');
			});

			it('should display placeholder page with the id of the bike', function() {
				expect(element(by.binding('currentId')).getText()).toBe('machine');
			});
		});
	});
});
