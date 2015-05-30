// app.js

define(function (require){
	'use strict';
	
	var Backbone = require('backbone'),
			Router   = require('router'),
			Session  = require('session');
			
	return Backbone.Model.extend({
		initialize: function () {
			// Check if user is authorized before instantiating the router.
			// Router will insititate the views for us once it's called
			// check router.js
			Session.getAuth(function (response) {
				new Router();
				Backbone.history.start();
			});
		}
	});

});