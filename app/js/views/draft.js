define(function (require) {

	var DraftTemplate = require('text!templates/draft.html'),
			BaseView      = require('core/BaseView');

	var DraftItemView = BaseView.extend({
		tagName: 'li',
		className: 'draft-item',

		template: _.template(DraftTemplate),

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.listenTo(this.model, 'destroy', this.remove);
		},

		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		remove: function () {
			this.stopListening();
      this.undelegateEvents();
      this.$el.remove();
		}
	});

	return DraftItemView;
});