// JS: Objects

// key/property - value pairs
// keys are strings, 
// values can be any data-type
const myObj = {
  a: 1,
  b: '2',
  "c": true
}

// Let's build a car:
const car = {
  doors: 5,
  color: 'blue',
  hp: 200,
  // pre ES6:
  run: () => {
    console.log('running...');
  },
  // post ES6 shorthand
  openTrunk() {
    console.log('trunk opened')
  }
}

car.hp // 200
// car.run() // 'running...'
car.passengers //undefined

const me = {
  name: "Anson",
  age: 25,
  occupation: 'teacher'
}

me.occupation = 'javascript expert';
me.skills = ['ruby', 'rails', 'javascript'];

function countChars(string) {
  const obj = {};

  for (let letter of string) {
    // while (!obj[letter] && obj[letter] !== 0) {
    //   obj[letter] = 0;
    // }
    // obj[letter]++;

    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }
  return obj;
}

// If there is only one param, parathensis is optional
const getAge = obj => {
  console.log(`${obj.name} is ${obj.age} years old`)
}

// getAge(me);

function getWordLengths(sentence) {
  let words = sentence.split(' ');
  let wordLengths = {};

  for (let word of words) {
    wordLengths[word] = word.length;
  }

  return wordLengths;
}

// Delete a key/value pair, use delete keyword
delete me.age;





