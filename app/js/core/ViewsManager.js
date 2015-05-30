// core/ViewsManager.js
// --------------------
// Manages transitions between views
// this is responsible for managing the content of a specific
// DOM element, displaying what needs to be displayed and cleaning
// up anything that no longer needs to be there
// credits: https://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/

define(function () {
	var AppViewManager = function () {
		this.showView = function (view) {

			if (this.currentView) {
				this.currentView.close();
			}
			this.currentView = view;
			this.currentView.render();
			$('#main').html(this.currentView.el);
		};
	};

	return new AppViewManager();
});