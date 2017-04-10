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
    // const height = $('#height').val().trim();
    const gender = $('#gender').val().trim();
    // const weight = $('#weight').val().trim();

    if (!firstName) {
      return Materialize.toast('First name must not be blank', 3000);
    }

    if (!lastName) {
      return Materialize.toast('Last name must not be blank', 3000);
    }

    if (!email) {
      return Materialize.toast('Email must not be blank', 3000);
    }

    if (email.indexOf('@') < 0) {
      return Materialize.toast('Email must be valid', 3000);
    }

    if (!password || password.length < 7) {
      return Materialize.toast(
        'Password must be at least 7 characters long',
        3000
      );
    }

    const options = {
      contentType: 'application/json',
      data: JSON.stringify({ firstName, lastName, email, password, age, gender, height, weight }),
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
