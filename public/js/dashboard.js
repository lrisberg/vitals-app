$(document).ready(() => {
  (function() {
    const logout = $('#logoutButton');
    const myRecords = $('#recordsButton');

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

    myRecords.click(function(event) {
      window.location.href = '/records';
    });

  })();
})
