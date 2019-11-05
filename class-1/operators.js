// comparisson operators
// == != < > <= >=

// Equality Operator
// double equals will only compare the value
// it has a loose idea of equality, because it tries to coerce one or both sides to similar types
// == !=

2 == 2 // true
2 != 2 // false
2 == '2' // true

// Strict Equality Operator 
// triple equals will compare the value and its data type
// === !==

2 === '2' // false
2 !== '2' // true

// Logical operators
// && (and) || (or)

// with the && (AND) operator all elements must be true for to return true
true && true // true
true && false // false
false && true // false
false && false // false

// with the || (OR) operator at least one element must be true to return true
true || true // true
false || true // true
true || false // true
false || false // false

