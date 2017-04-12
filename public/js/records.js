$(document).ready(() => {
  (function() {

    console.log('hey from records');
    const addDoc = $('#addDoc')

    addDoc.click(function(event) {
      window.location.href = '/addRecord';
    });

    $('.notesButton').click((event) => {

      let recordId = $(event.target).attr('name');

      window.location.href = `/records/${recordId}`;
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
