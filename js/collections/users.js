/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// User Collection
	// ---------------

	// The collection of users is backed by *localStorage* instead of a remote
	// server.
	var Users = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.User,

		// Save all of the user items under the `"users"` namespace.
		localStorage: new Backbone.LocalStorage('users-backbone')
	});

	// Create our global collection of **Users**.
	app.users = new Users();
})();
