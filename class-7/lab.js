// jQuery Lab: http://bit.ly/jquery-lab

$('*') // Select all elements
$('ul a') // descendant selector
$('h1, h2') // select all <h1> tags AND <h2>
$('.shape') // select all shapes
$('.shape.black') // select all black shapes
$('.shape').length // count all shapes
$('.shape.black').length // count all black shapes
$('.shape.black, .shape.blue').length // count all black shapes AND blue shapes
$('h1') // select all h1 tags
$('.small.circle') // select all small circles
$('li > a').eq(3) // get 4th element of the JQuery collection

// When getting an attribute, only the first element's attribute is returned
$('li > a').eq(0).attr('href')
$('li > a').attr('href') // same as above

// When setting attributes, every element in the collection will be set
$('li > a').attr('href', "https://www.codecore.ca")

let links = document.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
	links[i].setAttribute('href', 'http://google.ca')
}

// Set the "class" attribute of all links to "highlight"
$('a').attr('class', 'highlight')

// Setting the "class" attribute of all the shapes erases any existing classes
$('.shape').attr('class', 'highlight')

// Add / remove classes:
$('.shape').addClass('highlight')
$('.shape').removeClass('highlight')
$('.shape').toggleClass('highlight')

document.querySelectorAll('.shape').forEach((node) => {
	node.classList.add('highlight')
})

$('.shape.blue').remove() // remove all blue shapes from the DOM
$('#orange-container .shape').remove() // remove all shapes in the orange container from the DOM
$('.red.small.circle').remove() // remove all small red circles from the DOM

// Try to get the HTML content of all the links
// Only the first content is returned
$('a').html()

// One way to get the links:
let jQlinks = $('a')
let arr = [];

for (let i = 0; i < jQlinks.length; i++) {
	arr.push( jQlinks.eq(i).html() )
}

$('#reset').html() // get the HTML contents of the reset button
$('#reset').html('Launch Missiles!') // set the HTML contents of the reset button
$('h1').html(`${prompt('What is your name?')} is cool`) // change all H1 tags to read "[Your Name] is Cool!"
$('#purple-container').children() // select all shapes in the purple container using "children"
$('#green-container > .shape').parent() // select the green container using "parent"
$('li > a').parent() // select all <li> tags with a link
$('#purple-container').hide() // sets the property display: none
$('#purple-container').show() // show the container again
$('a').hide() // hide all links
$('a').show() // show all links

// log "shape clicked" whenever a shape is clicked
$('.shape').on('click', function() {
	console.log('shape clicked')
})

document.querySelectorAll('.shape').forEach(function (node) {
	node.addEventListener('click', function() {
	console.log('clicked');
})})

// When your mouse enters any blue circle, log "Go away!"" to the console
$('.blue.circle').on('mouseenter', function () {
  console.log('Go away!');
})

// When your mouse leaves any blue circle, log "Goodbye"" to the console
$('.blue.circle').on('mouseleave', function () {
	console.log('Goodbye');
})

// When your mouse enters any <tr> tag, set its class to "highlight"
$('tr').on('mouseenter', function() {
	$(this).addClass('highlight')
})

// When your mouse leaves any <tr> tag, set its class to ""
$('tr').on('mouseleave', function() {
  $(this).removeClass('highlight')
})

// When any shape is clicked, log the value of its "class" attribute
$('.shape').on('click', function() {
	console.log($(this).attr('class'))
})

// When any shape is clicked, hide it
$('.shape').on('click', function() {
	$(this).hide();
})

// When any shape is clicked, remove its container
$('.shape').on('click', function() {
	$(this).parent().remove()
})

// When any container is clicked, remove all the shapes inside it
$('.container').on('click', function() {
	$(this).children().remove()
})
