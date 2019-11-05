/**
 * A variable is a container that holds a value
 * A variable has accessibility, name and a value
 * 
 * the accessibility is set by one keyword
 * const, let or var
 * 
 */

// Declare an immutable variable
const myNumber = 2;

// Declare a mutable variable
let name = "Joe";
let boolean = true;
boolean = false;

// Syntax is as follows:
// In the following syntax we are both
// declaring and initializing a variable
// {Keyword} {variableName} = {Value};

// when declaring a variable without a Value
// space in memory gets assigned but its value is
// `undefined`
let helloWorld;
helloWorld // undefined

// can set value to null
let helloWorld = null;

// camelCase (this is the convention)
const camelCase = 'value';
// snake_case
const snake_case = 'value';

const firstName = 'Jane'
const lastName = 'Doe'
const fullName = firstName + ' ' + lastName

