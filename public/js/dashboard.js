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
            window.location.replace = '/index';
          })
          .fail(() => {
            console.log('Unable to log out. Please try again.');
          });

    })
  })();
})
