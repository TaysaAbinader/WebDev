// Restructure the following instances of code to work correctly:

// // 1.
// for(let i = 0; i < values.length; i++){
//   console.log(values[i]);
// }

// let values = [10, 20, 30];

// Solution:

let values = [10, 20, 30];

for(let i = 0; i < values.length; i++){
    console.log(values[i]);
    };

// // 2.
// console.log(welcome('Charlie', 'Munger'));

// function welcome(first, last) {
//   return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
// };

// let lastLogin = '1/1/1970';

// Solution:

let lastLogin = '1/1/1970';

function welcome(first, last) {
    return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
    };

console.log(welcome('Charlie', 'Munger'));
