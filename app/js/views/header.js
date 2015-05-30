// views/header/js

define(function (require) {
	'use strict';
	
	var BaseView        = require('core/BaseView'),
			Session         = require('session'),
			authTemplate    = require('text!templates/header-loggedin.html'),
			defaultTemplate = require('text!templates/header.html');

	return BaseView.extend({
		el: "#klipse-header",

		template: _.template(defaultTemplate),
		
		authTemplate: _.template(authTemplate),

		events: {
			'click #logout': 'logout'
		},

		render: function () {
			if (Session.get('authenticated') === null) {
				this.$el.html(this.template);
			} else {
				this.$el.html(this.authTemplate);
			}
			return this;
		},

		logout: function (e) {
			var view = this;
			Session.logout();
			e.preventDefault();
		}
	});

});