// js/views/app.js

define(function (require) {
	'use strict';

	var BaseView        = require('core/BaseView'),
			defaultTemplate = require('text!templates/home.html'),
			LoginForm       = require('views/hp-login'),
			SignupForm      = require('views/hp-signup');
	
	return BaseView.extend({

		tagName: "section",

		id: "homePage",

		template: _.template(defaultTemplate),
		

		events: {
			'click #home-register': 'register'
		},

		initialize: function () {
			this.childViews = [];
		},

		render: function () { 
			// Insert main template
			this.$el.html(this.template);
			
			// Render Sub Views
			this.renderSubView(LoginForm);
			this.renderSubView(SignupForm);

			return this;
		},

		// renderSubViews( subView )
		// This will instantiate a new sub-view and pass an el to it
		// then we push it to this.childViews which will allow us to
		// access those views for future references i.e: when closing 
		// views.
		renderSubView: function ( sub ) {
			var subView = new sub();
			this.$el.append( subView.render().el );
			this.childViews.push(subView);
		},

		register: function (e) {
			e.preventDefault();
		}
	});
});