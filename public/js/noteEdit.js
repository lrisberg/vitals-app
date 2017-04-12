$(document).ready(() => {

  $('#editNoteButton').click((event) => {
    event.preventDefault();

    let noteId = $('#noteId').attr('value');

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        body: $('#noteText').val()
      }),
      dataType: 'json',
      type: 'PATCH',
      url: `/notes/${noteId}`
    };

    $.ajax(request)
      .done((updatedNote) => {
        console.log(updatedNote);

        window.location.href = `/records/${updatedNote.recordId}`;
      })
      .fail(() => {
        console.log('FAIL');
      })

  })

})
