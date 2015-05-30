// views/signup.js

define(function (require) {
	var BaseView      = require('core/BaseView'),
			SigupTemplate = require('text!templates/signup.html');

	return BaseView.extend({
		template: _.template(SigupTemplate),

		tagName: 'div',
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