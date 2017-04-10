$(document).ready(() => {
  (function() {
    const logout = $('#logoutButton');

    logout.click(function(event) {

        const options = {
          dataType: 'json',
          type: 'DELETE',
          url: '/token'
        };

        $.ajax(options)
          .done(() => {
            window.location.href = '/';
          })
          .fail(() => {
            window.location.href = '/';

          });

    })
  })();
})
