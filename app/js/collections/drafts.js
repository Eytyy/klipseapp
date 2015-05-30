// collections/drafts.js

define(function (require) {
	var DraftModel = require('models/draft');

	var DraftsCollection = Backbone.Collection.extend({
		model: DraftModel,
		url: 'drafts/'
	});

	return new DraftsCollection();
})