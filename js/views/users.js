/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
	'use strict';

	// The Application
	// ---------------

	app.UsersView = Backbone.View.extend({

		el: '#usersapp',

		events: {},

		initialize: function () {
			this.$list = $('#users-list');
			this.$form = new app.UserFormView({ model: new app.User() });
			this.$form.render();

			this.listenTo(app.users, 'add', this.addOne);
      app.users.once('sync', this.render, this);

      app.users.fetch({reset: true});
		},

		render: function () {
      _.each(app.users.models, function(user) {
        this.addOne(user);
      }, this);
		},

		setEdit: function (user) {
			console.log("Ping!", user);
			this.$form = new app.UserFormView({ model: user });
			this.$form.render();
		},

		addOne: function (user) {
			var view = new app.UserView({ model: user });
			this.listenTo(view, 'user:edit', this.setEdit);
			this.$list.append(view.render().el);
		}
	});
})(jQuery);
