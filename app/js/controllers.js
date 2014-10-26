'use strict';

/* Controllers */
var bikeStoreApp = angular.module("bikeStoreApp", []);

bikeStoreApp.controller("BikesOverviewCtrl", function($scope){
	$scope.bikes = 
		[
		    {
		        "additionalFeatures":"None",
		        "availability":[
		            "Dumpster"
		        ],
		        "description":"Bacon ipsum dolor amet laboris drumstick sed jerky anim tongue voluptate in sirloin ground round nisi short loin culpa tail leberkas. Pig cillum consequat minim, ham ullamco brisket in eiusmod. Cillum shank id, spare ribs enim rump short ribs mollit dolore dolor commodo leberkas. Meatball qui rump in. Sint ham hock sed strip steak bresaola, do officia salami consectetur spare ribs.",
		        "frame":{
		            "type":"Z-Frame",
		            "material":"steel",
		            "weight":"14lb"
		        },
		        "id":"bestwick",
		        "images":[
		            "img/bikes/bestwick-1.jpg",
		            "img/bikes/bestwick-2.jpg"
		        ],
		        "name":"Super Lame Bestwick Bike",
		        "sizeAndWeight":{
		            "dimensions":[
		                "12 inches (w)",
		                "19 inches (h)",
		                "40 inches (d)"
		            ],
		            "weight":"16lb"
		        }
		    },
		    {
		        "additionalFeatures":"Shield of protection",
		        "availability":[
		            "Only in America"
		        ],
		        "description":"Duis consequat ad aliqua adipisicing ex. Occaecat labore ball tip culpa, biltong excepteur dolore fatback ad pork loin. Proident est cillum in kevin. Turkey incididunt kevin, tail hamburger ribeye porchetta pig filet mignon irure reprehenderit ham hock. Brisket tenderloin ad boudin porchetta in jerky lorem, ham hock ut aliquip ut voluptate nulla.",
		        "frame":{
		            "type":"C-Frame",
		            "material":"titanium",
		            "weight":"6lb"
		        },
		        "id":"capt",
		        "images":[
		            "img/bikes/capt-1.jpg",
		            "img/bikes/capt-2.jpg",
		            "img/bikes/capt-3.jpg"
		        ],
		        "name":"Captain America Kick Butt Bike",
		        "sizeAndWeight":{
		            "dimensions":[
		                "14 inches (w)",
		                "13 inches (h)",
		                "44 inches (d)"
		            ],
		            "weight":"10lb"
		        }
		    },
		    {
		        "additionalFeatures":"Stylish spokes",
		        "availability":[
		            "Everywhere"
		        ],
		        "description":"Reprehenderit pancetta meatball kevin ex bacon landjaeger. Jowl frankfurter consequat ut. Culpa pancetta ipsum tenderloin pig. Kevin velit flank ut. Frankfurter lorem turducken short loin chicken occaecat dolore ut jerky kielbasa. Fugiat jerky ex, ribeye pastrami velit eu bacon doner in proident aliqua tongue beef ribs.",
		        "frame":{
		            "type":"W-Frame",
		            "material":"aluminum",
		            "weight":"7lb"
		        },
		        "id":"freestyle",
		        "images":[
		            "img/bikes/freestyle-1.jpg",
		            "img/bikes/freestyle-2.jpg",
		            "img/bikes/freestyle-3.jpg",
		            "img/bikes/freestyle-4.jpg"
		        ],
		        "name":"Freestyle Stunt Bike",
		        "sizeAndWeight":{
		            "dimensions":[
		                "11 inches (w)",
		                "18 inches (h)",
		                "40 inches (d)"
		            ],
		            "weight":"6lb"
		        }
		    },
		    {
		        "additionalFeatures":"Optional wheel pegs",
		        "availability":[
		            "Everywhere"
		        ],
		        "description":"Ground round ipsum eu pastrami incididunt commodo minim. Deserunt ea exercitation sirloin corned beef ullamco, consectetur hamburger. Ribeye bacon ea magna, fatback do brisket. Consectetur ham shoulder tail bacon est et culpa tempor labore incididunt. Voluptate chicken spare ribs, filet mignon pork ut short loin sausage venison cow. Strip steak filet mignon occaecat nisi flank ribeye ball tip eu, excepteur ullamco beef ribs.",
		        "frame":{
		            "type":"A-Frame",
		            "material":"steel",
		            "weight":"7lb"
		        },
		        "id":"machine",
		        "images":[
		            "img/bikes/machine-1.jpg",
		            "img/bikes/machine-2.jpg",
		            "img/bikes/machine-3.jpg"
		        ],
		        "name":"The Machine",
		        "sizeAndWeight":{
		            "dimensions":[
		                "14 inches (w)",
		                "17 inches (h)",
		                "41 inches (d)"
		            ],
		            "weight":"11lb"
		        }
		    },
		    {
		        "additionalFeatures":"Optional wheel pegs",
		        "availability":[
		            "Everywhere"
		        ],
		        "description":"Hamburger flank shankle, dolor fatback labore in ribeye velit ullamco. Salami ground round id tri-tip ex adipisicing. Ham andouille kevin, irure frankfurter pastrami eiusmod. Nisi bacon velit, veniam drumstick reprehenderit officia pork chop commodo meatball.",
		        "frame":{
		            "type":"A-Frame",
		            "material":"steel",
		            "weight":"7lb"
		        },
		        "id":"moto",
		        "images":[
		            "img/bikes/moto-1.jpg",
		            "img/bikes/moto-2.jpg",
		            "img/bikes/moto-3.jpg"
		        ],
		        "name":"Blue Moto 3000",
		        "sizeAndWeight":{
		            "dimensions":[
		                "12 inches (w)",
		                "19 inches (h)",
		                "40 inches (d)"
		            ],
		            "weight":"9lb"
		        }
		    }
		];

		$scope.order = 'name';
});