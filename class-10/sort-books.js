let input = prompt('Enter a book name');
const books = [];

while (input.toLowerCase() !== 'exit') {
  books.push(input.toLowerCase())
  input = prompt('Enter a book name');
}

console.log(books.sort(function(a, b) {
  return a - b;
}))

// sorting strings will compare their Unicode
// so capital letters will go first
// console.log(books.sort())
