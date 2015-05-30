// views/signup.js

define(function (require) {
	var SignupView      = require('views/signup'),
			SigupTemplate = require('text!templates/signup.html');

	return SignupView.extend({
		template: _.template(SigupTemplate),

		tagName: 'div',
		id : 'homepage-signup',
		className : 'homepage-form',
		
		events: {
			'click #home-register': 'register'
		},

		render: function () {
			this.$el.html(this.template);
			return this;
		},

		register: function (e) {
			e.preventDefault();
			console.log('register');
		}
	});

});