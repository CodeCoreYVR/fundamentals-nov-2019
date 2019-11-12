function drawTriangle(number) {
  for (let i = 1; i <= number; i++) {
    console.log(" ".repeat(number - i) + "0 ".repeat(i));
  };
}

drawTriangle(5)

// How to define a variable
// const, let, or var

// Declaring and initialize
// {keyword} {variableName} = {value}

// Declare without initalizing
// {keyword} {variableName}
let example;
example //undefined

// Difference between const an let
let letVariable = 0;
letVariable = 1; // 1
letVariable++ // 2

const constVariable = 0;
constVariable++ // Uncaught TypeError: Assignment to constant variable

const name; // Uncaught Syntax: Missing initializer in const declaraction

// How to define a string:
"Double quotes"
'Single quote'
`backticks`
// No difference between "" and '', other 
// than you must excape the same quote inside the string with '\'
'You\'re awesome' // You're awesome

// Using backticks, you can interpolate
`5 + 5 = ${5 + 5}` // "5 + 5 = 10"
// Backticks also allow for multiline strings:

`
  This
  is on a
  new line
`

// The differenct between == and ===
2 == '2' // JS will try to coerce the operands into the same data type before comparing
// The above then becomes true
'2' == '2' // true

// using ===, JS will not try to coerce
2 === '2' // false
