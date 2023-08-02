// print 
console.log('Hello world!')

// variables
const number = 9;
const text = 'This is some info'
const bool = true;

// types
const array = []; 
const object = {};

// special types
// [#] const undefinedvariable;
// [#] console.log(undefinedvariable); // prints out undefined which implies that the variable has no value assigned 
const emptyvariable = null; // prints out null meaning that the variable is empty 

// arrays
var frontend = ['js','html','css'];
var backend = new Array('python','js');

// addressing - query arrays by indices 
console.log(frontend[1]); // expect html 

// array elements
var combination = ['text',0,[],{},true];

// manipulating arrays
// pushing & popping - push > append at the end of an array & pop > drop at the end of an array
var languages = [];

// push
languages.push('JavaScript');
languages.push('HTML');
languages.push('CSS');
languages.push('Python');
languages.push('C');
languages.push('More Languages');

// pop 
languages.pop();

// shifting and unshifting
// shift and unshift are similar to the push and pop method. The only difference is that they work from the beginning of the array opposite to the push and pop - shift > pop unshift > push 

// unshift
languages.unshift('Java');
languages.unshift('Kotlin');
languages.unshift('Ruby');
languages.unshift('Dart');
languages.unshift('More Languages');

// shift
languages.shift();

// splicing - removes a part of an array and creates a new array based on the part that we remove

var android_languages = languages.splice(0,4);

// operators
// the addition operator - (+) > used for both addition and concatenation of strings

// addition
var hands = 2;
var legs = 2;
var limbs = hands + legs;

// concatenation
var first_name = 'John';
var last_name = 'Doe';
var age = 23;

console.log('Hi, my name is ' + first_name + ' ' + last_name + '. I am ' + age + ' years old.');

// mathematical operators
// subtract - (-)
console.log(2 - 1);

// multiply - (*)
console.log(2 * 1);

// divide - (/)
console.log(2 / 1);

// advanced mathematical operators
// modulus - (%) - calculate the remainder of division
console.log(4 % 3);

// combined assignment
var age = 23;
age += 1; // instead of var age = age + 1
console.log(age);

// assignmet extends to - (*,-,/,%)  > *=,/=,-=,%=

// more mathematics - js has a math module for advanced functions > abs - absolute value of a number, pow - powers of numbers x & y , etc
