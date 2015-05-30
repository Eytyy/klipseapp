// router.js

define(function (require) {
	'use strict';

	var HomeView      = require('views/home'),
			AppHeaderView = require('views/header'),
			Session       = require('session');

	return Backbone.Router.extend({

		initialize: function () {
			this.renderHeader();
			this.listenTo(msgBus, 'authChange', this.resetAuth);
		},

		routes: {
			'': 'home',
			'login': 'showLogin',
			'about': 'about'
		},

		resetAuth: function () {
			this.renderHeader();
			this.home();
		},

		renderHeader: function () {
			this.HeaderView = new AppHeaderView();
			this.HeaderView.render();
		},

		// Routes that need authentication if user is not authenticated
		// gets redirected to login page
		requiresAuth: function (callback) {
			if (user.isLoggedIn()) {
				callback();
			} else {
				this.navigate('login', {trigger: yes});
			}
		},

		home: function () {

			if (Session.get('authenticated') === null) {

				this.HomeView = new HomeView();
				appViewManager.showView(this.HomeView);
				
			} else {

				var DraftsView       = require('views/drafts'),
						DraftsCollection = require('collections/drafts');

				this.DraftsView = new DraftsView({
					collection: DraftsCollection
				});

				appViewManager.showView(this.DraftsView);
				
			}

		},

		// Routes that should not be accessible if user is authenticated
		// for example, login, register, forgetpasword...
		preventAccessWhenAuth: ["#login"],
		
		about: function () {
			var AboutView = require('views/about');
			this.AboutView = new AboutView();
			appViewManager.showView(this.AboutView);

			console.log('Routing - about Page -');
		},

		showLogin: function () {
			var LoginView = require('views/login');
			this.LoginView = new LoginView();
			appViewManager.showView(this.LoginView);

			console.log('Routing - Login Page -');
		},

		showLogin: function () {
			var LoginView = require('views/login');
			this.LoginView = new LoginView();
			appViewManager.showView(this.LoginView);

			console.log('Routing - Login Page -');
		},
	});
});