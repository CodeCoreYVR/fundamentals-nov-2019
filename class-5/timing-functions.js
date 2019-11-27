console.log('Loading...')

setTimeout(() => {
  console.log('Hello World')
} , 3000)

let count = 10;
const blastOff = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!!');
    clearInterval(blastOff);
  } else {
    console.log(count--);
  }
}, 1000);
