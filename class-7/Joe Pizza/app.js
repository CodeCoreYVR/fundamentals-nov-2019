$(document).ready(function() {
  console.log('Loaded')
  
  $('h1').on('click', function() {
    console.log('clicked');
  });
});

// Below is a shorthand way of adding the ready event
$(function() {
  console.log('Loaded')
  
  $('h1').on('click', function(e) {
    console.log('clicked');
  });
});
