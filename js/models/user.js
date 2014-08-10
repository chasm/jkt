/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// User Model
	// ----------

	app.User = Backbone.Model.extend({
		defaults: { nameFirst: '', nameLast: '', email: '' },

		validate: function(attrs, options) {
	    if (!attrs.nameFirst.trim()) {
	      return "must include a first name.";
	    }

			if (!EMAIL_REGEX.test( attrs.email.trim() )) {
				return "must include a valid email address.";
			}
	  }
	});
})();
