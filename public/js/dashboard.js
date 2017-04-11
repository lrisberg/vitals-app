$(document).ready(() => {
  (function() {
    const logout = $('#logoutButton');
    const myCategories = $('#categoriesButton');

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

    myCategories.click(function(event) {
      window.location.href = '/categories';
    });

  })();
})
