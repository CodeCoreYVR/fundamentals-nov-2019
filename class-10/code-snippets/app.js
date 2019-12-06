$(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyBPaZ0pDFu_sYzec6is7f9U6GLxOV7ZoIo",
    authDomain: "code-snippets-745f7.firebaseapp.com",
    databaseURL: "https://code-snippets-745f7.firebaseio.com",
    projectId: "code-snippets-745f7",
    storageBucket: "code-snippets-745f7.appspot.com",
    messagingSenderId: "436913144317",
    appId: "1:436913144317:web:3d798c1e3b86928ac81994",
    measurementId: "G-12RX01SDZ0"
  };
  firebase.initializeApp(firebaseConfig);

  $('form').on('submit', function(event) {
    event.preventDefault();
    let language = $('#language-input').val();
    let title = $('#title-input').val();
    let code = $('#code-input').val();

    firebase
      .database()
      .ref('/code-snippets')
      .push({
        language: language,
        title: title,
        code: code,
      })
    $('.form-control').val('')
  })

  firebase
    .database()
    .ref('/code-snippets')
    .on('child_added', function(record) {
      $(`#${record.val().language}-list`).append(
        `
          <div class="card-body">
            <h3>${record.val().title}</h3>
            ${record.val().code}
          </div>
        `
      )
    })
})
