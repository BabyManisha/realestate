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


	var App = new Vue({
	  el: '#app',
	  data: function () {
	      return {
	        'navApps': ['Home', 'Buy', 'Sell', 'Rent', 'About', 'Contact'],
	        'activeApp': 'Home',
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
	    }
	  }
	})
});
