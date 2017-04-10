$(document).ready(function() {
  (function() {
    'use strict';

    // $('.button-collapse').sideNav();

    // eslint-disable-next-line max-statements
    $('#signUpForm').submit((event) => {
      event.preventDefault();

      const firstName = $('#firstName').val().trim();
      const lastName = $('#lastName').val().trim();
      const email = $('#email').val().trim();
      const password = $('#password').val();
      const age = $('#age').val().trim();
      const height = $('#height').val().trim();
      const gender = $('#gender').val().trim();
      const weight = $('#weight').val().trim();

      if (!firstName) {
    toastr.warning("Please enter your first name")
      }
      if (!lastName) {
    toastr.warning("Please enter your last name")
      }
      if (!email) {
    toastr.warning("Please enter a valid email address")
      }
      if (!password) {
    toastr.warning("Please enter your password")
      }

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          age,
          gender,
          height,
          weight
        }),
        dataType: 'json',
        type: 'POST',
        url: '/users'
      };

      $.ajax(options)
        .done(() => {
          window.location.href = 'notes';
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });
    });
  })();
})
