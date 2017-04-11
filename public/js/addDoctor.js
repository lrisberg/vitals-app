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
      const phone = $('#phone').val().trim();
      const address = $('#address').val().trim();
      const specialty = $('specialty').val();

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
          window.location.href = 'dashboard';
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });
    });
  })();
})
