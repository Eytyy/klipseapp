define( function (require) {
	var DraftsTemplate   = require('text!templates/drafts.html'),
			DraftItemView    = require('views/draft'),
			DraftsCollection = require('collections/drafts'),
			BaseView         = require('core/BaseView');

	var DraftsView = BaseView.extend({
		tagName: 'ul',
		id: 'drafts-list',

		template: _.template(DraftsTemplate),

		initialize: function () {
			this.childViews = [];
			this.listenTo(this.collection, 'reset', this.render);
			this.collection.fetch();
		},

		render: function () {
			var that = this;
			console.log('test');
			if (this.collection.length > 0) {
				this.collection.each(function (draft) {
					this.renderDraft(draft);
				}, this);
			} else {
				setTimeout(function (){
					that.render();
				}, 1000);
			}
			return this;
		},

		renderDraft: function (draft) {
			var DraftView = new DraftItemView({
				model: draft
			});
			this.$el.append(DraftView.render().el);
			this.childViews.push(DraftView);
		}
	});
	return DraftsView;
});