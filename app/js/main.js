// main.js - requirejs main file - kick things of here
require.config({
	paths: {
		"jquery"     : "lib/jquery/dist/jquery.min",
		"underscore" : "lib/underscore/underscore-min",
		"backbone"   : "lib/backbone/backbone-min",
		"text"       : "lib/requirejs-text/text"
	}
});

require([
	'backbone',
	'app',
	'core/ViewsManager'
], function (Backbone, AppModel, ViewsManager){
		'use strict';

		// Main App Model
		var APP = new AppModel();
		// Message bus for inter-component communication
		window.msgBus = _.extend({}, Backbone.Events);
		// Manages transitions between main views
		window.appViewManager = ViewsManager;
});
