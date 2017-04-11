$(document).ready(() => {

  $('#addNoteButton').click((event) => {
    event.preventDefault();

    let noteBody = $('#noteText').val();

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        noteBody: noteBody
      }),
      dataType: 'text',
      type: 'POST',
      url: '/notes'
    };

    $.ajax(request)
      .done(() => {
        window.location.reload();
      })
      .fail(() => {
        console.log('FAIL');
      });
  });
})
