// While loop

// Initialize value e.g. let i = 1;
// while (condtion/expression) {
  // code that runs while the conidtion is true

  // it runs after the iteration is finished:
  // afterthought: e.g. i++
// }

// For loop
// for (initiailizer ; expression/condition ; afterthought) {
  // code that runs while the conidtion is true
// }

// Log the numbers from 1 to 100 to the console:

let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}

// the above while loop behaves exactly as the following:
// for the while loop, i is in the global scope

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// if there is only one statement in the for loop, you can write it without braces:

for (let i = 1; i <= 100; i++) console.log(i);
