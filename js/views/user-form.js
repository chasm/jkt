/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function ($) {
  'use strict';

  // User Form View
  // --------------

  app.UserFormView = Backbone.View.extend({
    el:  '#users-form',

    // Cache the template function for a single item.
    template: _.template($('#user-form-template').html()),

    // The DOM events specific to an item.
    events: {
      'keypress .form-control': 'createOnEnter',
      'click #user-submit': 'createUser',
      'click #user-clear': 'clearForm'
    },

    initialize: function () {},

    render: function () {
      this.$el.html(this.template());
      console.log("this.model.id: ", this.model.id);

      $('#name-first').focus();

      if (this.model.id) {
        if (this.model.get('nameFirst')) {
          $('#name-first').val(this.model.get('nameFirst'));
        }

        if (this.model.get('nameLast')) {
          $('#name-last').val(this.model.get('nameLast'));
        }

        if (this.model.get('email')) {
          $('#email').val(this.model.get('email'));
        }
      }

      return this;
    },

    getFirstName: function () {
      return $('#name-first').val().trim();
    },

    getLastName: function () {
      return $('#name-last').val().trim();
    },

    getEmail: function () {
      return $('#email').val().trim();
    },

    validateEmail: function (email) {
      return EMAIL_REGEX.test(email);
    },

    clearForm: function () {
      $('#name-first').val('');
      $('#name-last').val('');
      $('#email').val('');
      $('#name-first').focus();
    },

    newAttributes: function () {
      return {
        nameFirst: this.getFirstName(),
        nameLast: this.getLastName(),
        email: this.getEmail()
      };
    },

    createUser: function () {
      console.log("createUser: ", this.model);
      if (!this.getFirstName()) {
        alert( "You must enter a first name." );
      } else if (!this.validateEmail( this.getEmail() )) {
        alert( "You must enter a valid email address." );
      } else {
        console.log(this.model.attributes);
        // app.users.create( this.newAttributes() );
        this.clearForm();
      }
    },

    createOnEnter: function (e) {
      if (e.which === ENTER_KEY) { this.createUser(); }
    }
  });
})(jQuery);
