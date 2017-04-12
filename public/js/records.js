$(document).ready(() => {
  (function() {

    const addDoc = $('#addDoc')

    addDoc.click(function(event) {
      console.log('Hey!')
      window.location.href = '/addRecord';
    });

    $('.notesButton').click((event) => {

      let recordId = $(event.target).attr('id')

      window.location.href = `/records/${recordId}`;
    })
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
          window.location.href = '/index';
        })
        .fail(() => {
          window.location.href = '/';
        });
    })

    $('#addRecord').click((event) => {
      window.location.href = "/records/add"
    })

  })();
})
