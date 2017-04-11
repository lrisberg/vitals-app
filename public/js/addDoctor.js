$(document).ready(function() {
  (function() {
    'use strict';

    // $('.button-collapse').sideNav();

    // eslint-disable-next-line max-statements
    $('#addADoc').submit((event) => {
      event.preventDefault();

      const firstName = $('#firstName').val().trim();
      const lastName = $('#lastName').val().trim();
      const email = $('#email').val().trim();
      const phone = $('#phone').val().trim();
      const address = $('#address').val().trim();
      const specialties = $('specialty').attr('spec-id').val();

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          address,
          specialties
        }),
        dataType: 'json',
        type: 'POST',
        url: '/doctors'
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
