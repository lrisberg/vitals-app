$(document).ready(() => {

  $('#addNoteButton').click((event) => {
    event.preventDefault();

    let noteBody = $('#noteText').val();

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        recordId: $('#recordId').val(),
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

  $('.deleteNoteButton').click((event) => {
    let noteId = $(event.target).attr('value');
    console.log(noteId);

    var request = {
      dataType: 'text',
      type: 'DELETE',
      url: `/notes/${noteId}`
    };

    $.ajax(request)
      .done(() => {
        window.location.reload();
      })
      .fail(() => {
        console.log('FAIL');
      })
  })

  $('.editNoteButton').click((event) => {
    let noteId = $(event.target).attr('value');

    window.location.href = `/notes/${noteId}/edit`;
  })
})
