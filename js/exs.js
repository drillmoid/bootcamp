// ex 1 - variables and types 
// q1 -You must define the following variables: (a) - A number called myNumber which contains the number 4; (b) - A string called myString which contains the sentence Variables are great.; (c) - A boolean called myBoolean which contains the value false;

// q1 - a
const myNumber = 4;

// q1 - b
const myString = 'Variables are great.';

// q1 - c 
const myBoolean = false;

// ex 2 - arrays 
// q1 - You must define an array with the following three variables: (a) - A string which has the value of "What is the meaning of life?" (b) - A number which has a value of 42 (c) -A boolean which has a value of true

// q1 - a,b,c
var ex2array = new Array('What is the meaning of life?',42,true);

// ex 3 - manipulating arrays 
// q1 - You must manipulate the array called myArray and do the following (a) - Push the number 42 to the end of the array (b) - Shift a variable from the beginning of the array 
var myArray = new Array(40,41);
myArray.push(42);
myArray.shift();

// ex 3 - Operators
// In this exercise, you do the following: (a) Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name. (b) Multiply the variable myNumber by 2 and put the result in meaningOfLife
var firstName = 'John';
var lastName = 'Doe';
var fullName = firstName + ' ' + lastName;
var age = 20;
var meaningOfLife = age *= 2;
console.log(meaningOfLife)