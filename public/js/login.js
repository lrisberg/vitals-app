$(document).ready(() => {
  (function() {


    $('#logInForm').submit((event) => {
      event.preventDefault();

      const email = $('#loginEmail').val().trim();
      const password = $('#loginPassword').val();

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
          window.location.href = 'dashboard';
        })
        .fail(($xhr) => {
          //Materialize.toast($xhr.responseText, 3000);
        });


    });
  })();
});
