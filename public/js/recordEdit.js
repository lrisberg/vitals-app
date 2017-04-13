$(document).ready(() => {

  $('#editRecordButton').click((event) => {
    event.preventDefault();

    let recordId = $('#recordId').attr('value');

    var request = {
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#recordName').val(),
        docname: $('#recordDocName').val()
      }),
      dataType: 'text',
      type: 'PATCH',
      url: `/records/${recordId}`
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
