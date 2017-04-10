$(document).ready(() => {
  (function() {
    const logout = $('#logoutButton');
    const myDoctors = $('#doctorsButton');
    const myData = $('#dataButton');

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

    myDoctors.click(function(event) {
      window.location.href = '/doctors';
    });

  })();
})
