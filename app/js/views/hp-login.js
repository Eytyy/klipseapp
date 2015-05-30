// views/login.js

define(function (require) {
	var LoginView      = require('views/login'),
			LoginTemplate = require('text!templates/login.html'),
			Session       = require('session');

	return LoginView.extend({
		template: _.template(LoginTemplate),

		tagName: 'div',
		id: 'homepage-login',
		className : 'homepage-form',

		events: {
			'click #home-login': 'login'
		},

		render: function () {
			this.$el.html(this.template);
			return this;
		},

		login: function (e) {
			e.preventDefault();
			var email    = $('#login-form__email-f').val(),
					password = $('#login-form__password-f').val();

			Session.login({
				email : email,
				password: password
			});
		}
	});

});