// Scenario 1: Basic Function: Refactor a simple function with no parameters and a single-line return statement:

// // Regular function
// function sayHello() {
//     return "Hello, world!";
// }
// Solution:

const hello = () => { return "Hello, world!"; };
console.log(hello);

// Scenario 2: Single Parameter: Refactor a function with a single parameter:

// // Regular function
// function double(x) {
//     return x * 2;
// }
// Solution:

const double = x => {return x * 2; };
console.log(double(5));

// Scenario 3: Multiple Parameters: Refactor a function with multiple parameters:

// // Regular function
// function add(x, y) {
//     return x + y;
// }
// Solution:

const add = (x, y) => {return x + y; };

console.log(add(3,8));

// Scenario 4: Function Inside an Object: Refactor a function defined inside an object:

// // Regular function
// const person = {
//     name: "Alice",
//     sayHi: function() {
//         return "Hi, " + this.name + "!";
//     }
// };
// Solution:

const person = {
    name: "Alice",
    sayHi: () => {return `Hi, ${this.name}!`;}
};

person.sayHi();


// Scenario 5: Callback Functions:

// Call back functions and map() will be discussed later in the course

// Refactor a callback function passed to the map method:

// const numbers = [1, 2, 3, 4, 5];

// const doubled = [];
// numbers.forEach(function(num) {
//   doubled.push(num * 2);
// });
// Solution:

const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach((number) => {doubled.push(number * 2);});

console.log(doubled);
