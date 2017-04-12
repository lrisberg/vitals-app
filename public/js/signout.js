$(document).ready(() => {
  (function() {

const logout = $('#logoutButton');
console.log('hello from signout');

logout.click(function(event) {

  const options = {
    dataType: 'json',
    type: 'DELETE',
    url: '/token'
  };

  $.ajax(options)
    .done(() => {
      window.location.href = '/index';
    })
    .fail(() => {
      window.location.href = '/';
    });
})
})();
})
