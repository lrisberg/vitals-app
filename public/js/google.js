function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  const profile = googleUser.getBasicProfile()

  // The ID token you need to pass to your backend:
  let id_token = googleUser.getAuthResponse().id_token

  $.ajax({
    method: 'POST',
    url: '/token',
    data: {
      name: profile.getName(),
      email: profile.getEmail()
    },
    success: (data) => {
      console.log('post success')
      if (data) {
        window.location = '/records'
      }
    },
    error: (err) => {
      console.log(err)
    }
  })
}

function signOut() {
  gapi.load('auth2', function() {
    gapi.auth2.init().then(function() {
      let auth2 = gapi.auth2.getAuthInstance()
      auth2.signOut().then(function() {
        auth2.disconnect()
        document.location = '/'
      })
    })
  })
}
