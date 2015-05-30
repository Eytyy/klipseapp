// js/views/app.js

define(function (require) {
	'use strict';

	var BaseView        = require('core/BaseView'),
			template 				= require('text!templates/about.html');
	
	return BaseView.extend({

		tagName: "section",

		id: "aboutPage",

		template: _.template(template),

		render: function () { 
			this.$el.html(this.template);
			return this;
		},

		register: function (e) {
			e.preventDefault();
		}
	});
});