// Log out 'Hello' every 1 second and stop after 10 seconds have passed
let count = 1;
const id = setInterval(function() {
	console.log('Hello', count);
	
	if (count++ === 10) {
		clearInterval(id)
    }
}, 1000)

// Change circle colours to value of input
$('#form-1').on('submit', function(event) {
	$('.shape.circle')
		.css(
			'background-color',
			$('input[type=text]').val()
        )
})

// Reverse engineer filter
function filter(arr, cb) {
	const output = [];
	for (let element of arr) {
		if (cb(element)) {
			output.push(element)
        }
    }
	return output;
}
filter([1, 2, 3, 4], () => 2 % 0 === 0) // [2, 4]
