// Stretch #1 Permutations
// const input1 = prompt('Enter input 1');
// const input2 = prompt('Enter input 2');
// const input3 = prompt('Enter input 3');

// This assumes that the inputs are length 1
// let inputs = input1 + input2 + input3;
let inputs = 'abc';

for (let input of inputs) {
  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs.length; j++) {
      console.log(`${input} ${inputs[i]} ${inputs[j]}`);
    }
  }
}
