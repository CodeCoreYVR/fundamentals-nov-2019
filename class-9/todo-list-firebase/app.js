$(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyCbDAkQsWXFQrgAtqojrWKLyEjMbmswEGw",
    authDomain: "todo-nov-111e0.firebaseapp.com",
    databaseURL: "https://todo-nov-111e0.firebaseio.com",
    projectId: "todo-nov-111e0",
    storageBucket: "todo-nov-111e0.appspot.com",
    messagingSenderId: "1055402041544",
    appId: "1:1055402041544:web:a991ed16f219f3dbb845fd",
    measurementId: "G-6415867DNH"
  };
  firebase.initializeApp(firebaseConfig);

  $('#task-form').on('submit', function(event) {
    event.preventDefault();
    
    const task = $('#task-input').val();

    // if task is '', it is falsey
    if (task) {
      // add the value of the input as a task to firebase
      firebase
        .database()
        .ref('/tasks')
        .push({
          name: task,
          isComplete: false
        })
    }
    $('#task-input').val('')
  })

  // The following will only add event listeners to elements 
  // that already exist in the DOM
  $('.delete').on('click', function(event) {
    $(this).closest('.list-group-item').remove()
  })

  // The following will add event listeners to already existing
  // elements and also elements that are created in the future
  $(document).on('click', '.delete', function(event) {
    const key = $(this).parent().siblings().attr('id')

    // remove the task from firebase
    firebase
      .database()
      .ref('/tasks')
      .child(key)
      .remove()
  })

  $(document).on('click', '.complete', function(event) {
    const isComplete = $(this).text() === 'Mark Incomplete'

    if (isComplete) {
      $(this).text('Mark Complete')
      $(this)
        .parent()
        .siblings()
        .css('text-decoration', 'none')
    } else {
      $(this).text('Mark Incomplete')
      $(this)
        .parent()
        .siblings()
        .css('text-decoration', 'line-through')
    }
  })

  // When a task is added to firebase, append a list item to the DOM
  firebase
    .database()
    .ref('/tasks')
    .on('child_added', function(record) {
      $(".list-group").append(
        `
          <li class="list-group-item d-flex justify-content-between">
            <span id=${record.key}>${record.val().name}</span>
            <small>
              <a href="#" class="complete">Mark Complete</a>
              |
              <a href="#" class="delete">Delete</a>
            </small>
          </li>
        `
      )
    })

    // When a task is removed from firebase, 
    // remove the list item from the DOM
    firebase
      .database()
      .ref('/tasks')
      .on('child_removed', function(record) {
        $(`#${record.key}`).parent().remove()
      })
})
