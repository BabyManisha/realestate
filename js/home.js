$(function() {

	Vue.component('home', {
	    template: "#app-home",
	    data: function(){
	    	return {
	    		'showProp': true,
	    		'selectedProp' : {},
	    		'homeImages': ['r4.jpg', 'r2.jpg', 'r3.jpg'],
	        	'currentImage':'r4.jpg',
	    		'recentPropsSearchKey': '',
	    		'recentProps': this.$parent.sampleData
	    	}
	    },
	    methods: {
	    	getDetails: function(ob){
	    		this.showProp = false;
	    		this.selectedProp = ob;
	    	},
	    	goBack: function(){
	    		this.showProp = true;
	    		this.selectedProp = {};
	    	},
	    	getContact: function(){
	    		this.$parent.getContact();
	    	}
	    }
	});

	Vue.component('buy', {
	    template: "#app-buy",
	    data: function(){
	    	return {
	    		'showProp': true,
	    		'selectedProp' : {},
	    		'buyPropsSearchKey': '',
		        'buyProps': this.$parent.sampleData
	    	}
	    },
	    methods: {
	    	getDetails: function(ob){
	    		this.showProp = false;
	    		this.selectedProp = ob;
	    	},
	    	goBack: function(){
	    		this.showProp = true;
	    		this.selectedProp = {};
	    	},
	    	getContact: function(){
	    		this.$parent.getContact();
	    	}
	    }
	});

	Vue.component('sell', {
	    template: "#app-sell"
	});

	Vue.component('rent', {
	    template: "#app-rent",
	    data: function(){
	    	return{
	    		'showProp': true,
	    		'selectedProp' : {},
    			'rentPropsSearchKey': '',
    			'rentProps' : this.$parent.sampleData
	    	}
	    },
	    methods: {
	    	getDetails: function(ob){
	    		this.showProp = false;
	    		this.selectedProp = ob;
	    	},
	    	goBack: function(){
	    		this.showProp = true;
	    		this.selectedProp = {};
	    	},
	    	getContact: function(){
	    		this.$parent.getContact();
	    	}
	    }
	});

	Vue.component('about', {
	    template: "#app-about"
	});

	Vue.component('contact', {
	    template: "#app-contact",
	    data: function(){
	    	return {
	    		activeApp: this.$parent.activeApp
	    	}
	    }
	});

	Vue.component('prop', {
	    template: "#app-prop",
	    props: {
	    	selectedProp: Object
	    },
	    created: function(){
	    	var self = this;
	    	x = navigator.geolocation;
	    	x.getCurrentPosition(success, failure);

	    	function success(position){
	    		//to get current location
	    		// var mylat = position.coords.latitude;
	    		// var mylong = position.coords.longitude;

	    		var mylat = self.selectedProp.latitude || position.coords.latitude;
	    		var mylong = self.selectedProp.longitude || position.coords.longitude;

	    		//Creating a new object for using latitude and longitude values with Google map.
	    		var latLng = new google.maps.LatLng(mylat, mylong);

	    		//setting up our google map....
	    		showMap(latLng);

	    		//create a marker
	    		// var marker = new google.maps.Marker({map: map, position: latLng});

	    		//for nearby places....
	    		addNearByPlaces(latLng);
	    		createMarker(latLng);

	    		function showMap(latLng) {
	    		  //Setting up the map options like zoom level, map type.
	    		  var mapOptions = {
	    		    center: latLng,
	    		    zoom: 18,
	    		    mapTypeId: google.maps.MapTypeId.ROADMAP
	    		  };
	    		 
	    		  //Creating the Map instance and assigning the HTML div element to render it in.
	    		  map = new google.maps.Map(document.getElementById("map"), mapOptions);
	    		}


	    		function addNearByPlaces(latLng) {
	    		  var nearByService = new google.maps.places.PlacesService(map);
	    		 
	    		  var requestFood = {
	    		    location: latLng,
	    		    radius: 1000,
	    		    types: ['food', 'bakery', 'cafe', 'restaurant']
	    		  };

	    		  var requestMovies = {
	    		    location: latLng,
	    		    radius: 1000,
	    		    types: ['movie_theater']
	    		  };
	    		 
	    		  nearByService.nearbySearch(requestFood, handleNearBySearchResults);
	    		  nearByService.nearbySearch(requestMovies, handleNearBySearchResults);
	    		}
	    		 
	    		function handleNearBySearchResults(results, status) {
	    			var icons = { "food" : "../images/food.png",
	    						"movie_theater" : "../images/movie.png"};
	    		  if (status == google.maps.places.PlacesServiceStatus.OK) {
	    		    for (var i = 0; i < results.length; i++) {
	    		      var place = results[i], placesTypes = place['types'], icon = '../images/food.png';
	    		      for(let i in icons){
	    		      	if(placesTypes.indexOf(i) > -1){
	    		      		icon = icons[i];
	    		      	}
	    		      }
	    		      createMarker(place.geometry.location, place, icon);
	    		    }
	    		  }
	    		}
	    		 
	    		function createMarker(latLng, placeResult, icon) {
	    		  var markerOptions = {
	    		    position: latLng,
	    		    map: map,
	    		    animation: google.maps.Animation.DROP,
	    		    clickable: true,
	    		    icon: icon
	    		  }
	    		  //Setting up the marker object to mark the location on the map canvas.
	    		  var marker = new google.maps.Marker(markerOptions);
	    		 
	    		  if (placeResult) {
	    		    var content = placeResult.name+"<br/>"+placeResult.vicinity+"<br/>"+placeResult.types;
	    		    addInfoWindow(marker, latLng, content);
	    		  }
	    		  else {
	    		    var content = "You are here: " + latLng.lat() + ", " + latLng.lng();
	    		    addInfoWindow(marker, latLng, content);
	    		  }
	    		 
	    		}

	    		function addInfoWindow(marker, latLng, content) {
	    		  var infoWindowOptions = {
	    		    content: content,
	    		    position: latLng
	    		  };
	    		 
	    		  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
	    		 
	    		  google.maps.event.addListener(marker, "click", function() {
	    		    infoWindow.open(map);
	    		  });
	    		}

	    	}

	    	function failure(position){
	    		$("#lat").html("<p>It didm't work, co-ordinates not available!</p>");
	    	}
	    },
	    methods: {
	    	goBack : function(){
	    		this.$parent.goBack();
	    	},
	    	getContact: function(){
	    		this.$parent.getContact();
	    	}
	    }
	});


	var App = new Vue({
	  el: '#app',
	  data: function () {
	      return {
	        'navApps': ['Home', 'Buy', 'Sell', 'Rent', 'About', 'Contact'],
	        'activeApp': 'Buy',
            'sampleData': {
            	'home1' : {
					'img': 'hm1.jpg',
					'type': 'Flat',
					'width': '36',
					'depth': '56',
					'category': 'Rent',	
					'face': 'East',	        		
					'address': 'Near M.R.O Office, Kankipadu 521151',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'latitude': 16.4376446,
	        		'longitude': 80.7690454,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home2' : {
					'img': 'hm6.jpg',
					'type': 'Home',
					'width': '36',
					'depth': '56',
					'face': 'West',
					'category': 'Sell',	
					'address': 'Near Benzcircle, Vijayawada 500010',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'latitude': 16.4337801,
	        		'longitude': 80.7678633,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home3' : {
					'img': 'h4.jpeg',
					'type': 'Field',
					'width': '36',
					'depth': '56',
					'category': 'Sell',	
					'face': 'South',	        		
					'address': 'Patamata Vijayawada 500001',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home4' : {
					'img': 'h7.jpg',
					'type': 'Home',
					'width': '36',
					'depth': '56',
					'category': 'Sell',	
					'face': 'North',	        		
					'address': '101/24-1 Vuyuru, AP, 520129',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home5' : {
					'img': 'h1.jpg',
					'type': 'Flat',
					'width': '36',
					'depth': '56',
					'category': 'Rent',	
					'face': 'East',	        		
					'address': 'Near M.R.O Office, Kankipadu 521151',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home6' : {
					'img': 'hm10.jpeg',
					'type': 'Home',
					'width': '36',
					'depth': '56',
					'face': 'West',
					'category': 'Sell',	
					'address': 'Near Benzcircle, Vijayawada 500010',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home7' : {
					'img': 'h3.jpg',
					'type': 'Field',
					'width': '36',
					'depth': '56',
					'category': 'Sell',	
					'face': 'South',	        		
					'address': 'Patamata Vijayawada 500001',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				},
				'home8' : {
					'img': 'hm9.jpeg',
					'type': 'Home',
					'width': '36',
					'depth': '56',
					'category': 'Sell',	
					'face': 'North',	        		
					'address': '101/24-1 Vuyuru, AP, 520129',
					'zipcode': '521151',
					'price': '₹8,500,000',
	        		'sqprice': '₹991',
	        		'estprice': '₹39,881',
	        		'save': false,
	        		'nearBy': {
	        			'hospitals' : [
	        				{'name' : 'Lakshmi RMP Hospital','distance': '1KM'},
	        				{'name' : 'Super Speciality Hospital', 'distance': '0.4KM'}
	        			],
	        			'atms' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'SBH', 'distance':'1KM'}
	        			],
	        			'banks' : [
	        				{'name':'SBI', 'distance':'0.2KM'},
	        				{'name':'Kotak', 'distance':'1KM'}
	        			],
	        			'busStops' : [
	        				{'name':'Kankipadu', 'distance':'0.5KM'},
	        				{'name':'Vuyuru', 'distance':'3KM'}
	        			],
	        			'railwayStations': [
	        				{'name':'Vijayawada', 'distance':'3KM'},
	        			]
	        		}
				}
             }
	      }
	  },
	  methods: {
	    switchApp: function (ap) {
	    	this.activeApp = ap;
	    },
	    getContact: function(){
    		this.activeApp = 'Contact';
    	}
	  }
	})
});
