// JS Functions:
// A container for a piece of code that can be executed whenever
// The arguments/parameters are the values that are passed 
// to the function when called
// You can only access the params within in the functions code

// Function syntax:
// Function declaraction/statement:
function functionName(arg1, arg2) {
  // code
  return // expression
  console.log('this will not show'); // this will not log
}

// Function expression:
// A function without a name is called an anonomyous function
const anotherFunction = function(arg1, arg2) {
  // code
  return // expression
}

// Arrow function (ES6+)
const arrow = (arg1, arg2) => {
  // code
  return "a string"
} 

// Invoke/call a function:
arrow(1, 2);

// Save the returned value to a variable
let a = arrow();

// if you don't a return statement, the function will return undefined when called
function returnUndefined(arg1, arg2) {
  // this will return undefined
}

function insult(name) {
  return `${name}, you doofus!`;
}

const increment = function(number) {
  // return ++number;
  return number + 1;
}

const repeat = (str, num) => {
  let output = '';
  for (let i = 1; i <= num; i++) {
    output += str;
    // output = output + str;
  }
  return output;

  // using repeat()
  // return str.repeat(num);
}


