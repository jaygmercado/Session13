// To print
console.log('Hello, World.');

// Variables

// Old way -> var keyword: not recommended
var i = 0;
console.log(1, i);

var i = 'hello';
console.log(2, i);

var i = true;
console.log(3, i);

// New and recommended way let and const keywords
let j;
j = 0;
console.log(1, 'j = ' + j);

// 1. Declare variable named j
// 2. Assign value 0 to variable j

j = 'hello';
console.log(2, 'j = ' + j);

j = true;
console.log(3, 'j = ' + j);

j = 100;

// Use const for variables which value won't change
const cannotChange = 0;

// Primitive DataTypes
// Number used for int, float, double
let num = 1;
let num2 = 2.5;
let num3 = 2.455;
console.log(num, num2, num3);

// String
let a = 'hello';
let hi = 'hi';
console.log(hi, a);

// Boolean
let totoo = true;
let hindiTotoo = false;
console.log(totoo, hindiTotoo);

// Undefined
let walangLaman;
let walangLaman2 = undefined;
console.log(walangLaman);
console.log(walangLaman2);

// Null
let var2 = null;
console.log(var2);

let araw = new Date();
console.log(araw);

// Operators
// Arithmetic Operators
let num4 = 10;
let num5 = 3;

// Addition
console.log(num4 + num5);

// Substraction
console.log(num4 - num5);

// Multiplication
console.log(num4 * num5);

// Division
console.log(num4 / num5);

// Exponentiation
console.log(num4 ** num5);

// Modulo
console.log(num4 % num5);

// start 10
console.log(++num4);
console.log(++num4);
console.log(num4++);
console.log(num4);

// Assignment Operator => right to left
num4 = 100;
num4 += 4;
console.log(num4);

num4 -= 8;
console.log(num4);

num4 *= 4;
console.log(num4);

num4 /= 4;
console.log(num4);

num4 %= 4;
console.log(num4);

// String Operators
// Concatenate
let tope = 'tope';
let benedict = 'benedict';
let groupA = tope + ' and ' +benedict;
console.log(groupA);

let numm1 = 23;
let text1 = '23';
console.log(numm1 + text1);
console.log(text1 + numm1);
console.log(text1 - numm1);
console.log(numm1 - text1);
console.log(numm1 * text1);
console.log(numm1 / text1);

// Operators
// Equal to => disregrads datatype
console.log(numm1 == text1);

// Strictly Equal
console.log(numm1 === text1);

// Not Equal to => disregrads datatype
console.log(numm1 != text1);

// Not Strictly Equal
console.log(numm1 !== text1);

console.log(num4 > num5);
console.log(num4 < num5);
console.log(num4 >= num5);
console.log(num4 <= num5);

let num6 = 6
// Logical Operators
// &&
console.log(num6 > 6 && num6 < 7);
console.log(num6 > 6 || num6 < 7);
console.log(num6 < 7 || num6 > 6);