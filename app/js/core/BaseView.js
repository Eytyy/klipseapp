// core/BaseView.js
// ----------------
// Extends Backbone.View to add a close method to all views when
// cleanup is needed

define(function (require) {
	return Backbone.View.extend({
		close: function () {
			if (this.childViews) {
				_.each(this.childViews, function (child) {
					child.close();
				});
			}
			this.remove();
		}
	});
});