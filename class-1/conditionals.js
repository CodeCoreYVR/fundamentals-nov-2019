// if/else statement

// The syntax for an if statement looks like this:

// Can be stand-alone like this
//  if (expression/condition) { 
//   code block that will execute only if the condition is true
// } 

// if (true) console.log('this will run');

// Or it can have an else/else if clause
//  if (expression/condition) { 
//   code block that will execute only if the condition is true
// } else {
  // code will run if the condition is false
// }

// Whenever you have an else clause, a block of code will always run
// Only one block of code is run, even if two conditions are true
//  if (expression/condition) { 
//   code block that will execute only if the condition is true
// } else if (expression/condition) {
  // code will run if second condition is true
  // but will not run if the first if (condition) was true
// } else {
  // code will run if the condition is false
// }

const age = 10;

if (age < 23) {
  console.log(`Based on your age ${age}, you are in Gen Z`);
} else if (age < 42) {
  // Even if condition is true, it will not run
  console.log(`Based on your age ${age}, you are in Gen Y`);
} else if (age < 73) {
  console.log(`Based on your age ${age}, you are in Gen X`);
} else {
  console.log(`Based on your age ${age}, you are in the traditional generation`);
}

const year = 2015;

if (year > 2019) {
  console.log(`Based on your year ${year}, your car is future`);
} else if (year > 2014) {
  // Even if condition is true, it will not run
  console.log(`Based on your year ${year}, your car is new`);
} else if (year > 2005) {
  console.log(`Based on your year ${year}, your car is old`);
} else {
  console.log(`Based on your year ${year}, your car is very old`);
}


