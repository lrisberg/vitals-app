$(document).ready(() => {
  (function() {
    console.log('HEY!')

    $('#logInForm').submit((event) => {
      event.preventDefault();

      const email = $('#loginEmail').val().trim();
      const password = $('#loginPassword').val();

      if (!email) {
        console.log("hello")
    toastr.warning("Please enter a valid email address")
      }
      if (!password) {
        console.log("hello")
    toastr.warning("Please enter your password")
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
          window.location.href = 'records';
        })
        .fail(($xhr) => {
          //Materialize.toast($xhr.responseText, 3000);
        });

    });
  })();
});
