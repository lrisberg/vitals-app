$(document).ready(() => {
  console.log("hello from recAdd")

  $('#addRecordButton').click((event) => {
    event.preventDefault();

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#recordName').val(),
        docname: $('#recordDocName').val()
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
