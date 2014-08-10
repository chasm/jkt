/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// Show User View
	// --------------

	app.UserView = Backbone.View.extend({
		tagName:  'tr',

		template: _.template($('#user-template').html()),

		events: {
			'click .user-edit': 'editUser',
			'click .user-delete': 'deleteUser'
		},

		initialize: function () {},

		render: function () {
      if (this.model.changed.id !== undefined) {
				return;
			}

			this.$el.html(this.template(this.model.toJSON()));

			return this;
		},

		editUser: function (e) {
			this.trigger('user:edit', this.model);
			console.log("Editing the user!", this.model.id);
		},

		deleteUser: function (e) {
			this.model.destroy();
			this.remove();
		}
	});
})(jQuery);
