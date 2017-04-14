$(document).ready(function() {
  (function() {
    'use strict';
    console.log('hello from signup')

    // $('.button-collapse').sideNav();

    // eslint-disable-next-line max-statements
    $('#signUpForm').submit((event) => {
      event.preventDefault();

      $('#signupErr').text('').hide();

      const firstName = $('#firstName').val().trim();
      const lastName = $('#lastName').val().trim();
      const email = $('#email').val().trim();
      const password = $('#password').val();
      const age = $('#age').val().trim();
      const height = $('#height').val().trim();
      const gender = $('#gender').val().trim();
      const weight = $('#weight').val().trim();

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
        .done((options) => {
          window.location.href = '/records';
        })
        .fail(($xhr) => {
          $('#signupErr')
            .text($xhr.responseText)
            .show();
        });
    });
  })();
})
