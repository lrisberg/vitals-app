$(document).ready(() => {
  (function() {

    $('#logInForm').submit((event) => {
      event.preventDefault();

      const email = $('#loginEmail').val().trim();
      const password = $('#loginPassword').val();

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
        data: JSON.stringify({
          email,
          password,
        }),
        dataType: 'json',
        type: 'POST',
        url: '/token'
      };

      $.ajax(options)
        .done(() => {
          window.location.href = '/';
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });


    });
  })();
});
