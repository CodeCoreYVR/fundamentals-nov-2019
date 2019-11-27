function returnZero(n) {
	return 0;	
}

const person = {
  name: 'Ian',
  age: 20
};

const printPerson = (obj) => console.log(`${obj.name} is ${obj.age} years old`);

const isPalindrome = string => {
  // 	let letters = string.split('');
  // 	let boolean = string === letters.reverse().join('');
  // 	return boolean;
  return string === string 
    .split('')
    .reverse()
    .join('')
}

