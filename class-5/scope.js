// Scope example
let a = 'a';

function print(arg) {
  if (arg === 'a') {
    let b = 'b';
  }

  console.log('a:', a);
  console.log('b:', b);
}

print(a);
