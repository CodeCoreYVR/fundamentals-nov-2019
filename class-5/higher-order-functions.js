// A higher order function is a function that either:
// - takes in a function as a parameter
// - returns a function

// runThree
const runThree = func => {
  func()
  func()
  func()
}

const sayHello = () => console.log('Hello');

runThree(sayHello)

// Reeningeering .map()
function map(arr, cb) {
  const output = [];

  for (let i = 0; i < arr.length; i++) {
      output.push(cb(arr[i]))
  }
  return output;
}    

// Apply all functions exercise:
function map(arr, cbs) {
  const output = arr.slice(0);
  for (let func of cbs) {
      for (let i = 0; i < arr.length; i++) {
          output[i] = func(output[i])
      }
  }   
  
  return output;
}        

[1, 2, 3].map((e) => e * 2)

map([1, 2, 3, 4, 5, 6, 7, 8, 9], e => e ** 2);

// Using .forEach()
function map(arr, cb) {
  const output = [];

    arr.forEach((e) => {
      output.push(cb(e))
    })
  return output;
}    
