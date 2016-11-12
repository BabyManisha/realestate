$(function() {
	var App = new Vue({
	  el: '#app',
	  data: function () {
	      return {
	        'navApps': ['Home', 'Buy', 'Sell', 'Rent', 'About', 'Contact'],
	        'activeApp': 'Home',
	      }
	  },
	  methods: {
	    switchApp: function (ap) {
	    	this.activeApp = ap;
	    }
	  }
	})
});
