$(document).ready(() => {
  (function() {

    const addDoc = $('#addDoc')

    addDoc.click(function(event) {
      console.log('Hey!')
      window.location.href = '/addRecord';
    });

    $('.notesButton').click((event) => {

      let recordId = $(event.target).attr('name');

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

    $('.deleteRecordButton').click((event) => {

      let recordId = $(event.target).attr('name');
      console.log(recordId);

      var request = {
        dataType: 'text',
        type: 'DELETE',
        url: `records/${recordId}`
      };

      $.ajax(request)
        .done(() => {
          window.location.reload();
        })
        .fail(() => {
          console.log('FAIL');
        })
    })

    $('#addRecord').click((event) => {
      window.location.href = "/records/add"
    })

    $('.editRecordButton').click((event) => {

      let recordId = $(event.target).attr('name');
      console.log(recordId);
      window.location.href = `/records/${recordId}/edit`;
    })

  })();
})
