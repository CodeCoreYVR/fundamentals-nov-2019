$(function() {
  $('#task-form').on('submit', function(event) {
    // This will stop the default 
    // behaviour/action of the form when submitted
    event.preventDefault();
    
    const task = $('#task-input').val();

    // if task is '', it is falsey
    if (task) {
      $(".list-group").append(
        `
          <li class="list-group-item d-flex justify-content-between">
            <span>${task}</span>
            <small>
              <a href="#" class="complete">Mark Complete</a>
              |
              <a href="#" class="delete">Delete</a>
            </small>
          </li>
        `
      )
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
    $(this).closest('.list-group-item').remove()
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
})
