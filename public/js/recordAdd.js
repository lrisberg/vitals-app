$(document).ready(() => {

  $('#addRecordButton').click((event) => {
    event.preventDefault();

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#recordName').val(),
        docname: $('#recordDocName').val(),
        picture: $('#recordPicture').val()
      }),
      dataType: 'text',
      type: 'POST',
      url: '/records'
    };

    $.ajax(request)
      .done(() => {
        window.location.href = "/records";
      })
      .fail(() => {
        console.log('FAIL');
      })
  })
})
