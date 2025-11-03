// // 1.
// function cube(x) {
//     return x * x * x;
//   }

//   Solution:

const cube = function (x) {return x * x * x;};

console.log(cube(2));

//   // 2.
//   function fullName(first, last) {
//     return first + " " + last;
//   }

//   Solution:

const fullName = function(first, last) {return `${first} ${last}`;};

console.log(fullName("Taysa", "Abinader"))

//   // 3.
//   function power(base, exp) {
//     if (exp === 0) {
//       return 1;
//     }
//     return base * power(base, exp - 1);
//   }

//   Solution:

const power = function(base, exp) { return exp === 0 ? 1 : base * power(base, exp - 1)};

console.log(power(2, 3));

//   // 4.
//   function sumCubes(numbers) {
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       total = total + cube(numbers[i]);
//     }
//     return total;
//   }

//   Solution:

const sumCubes = function(numbers) {
    let total = 0;
    numbers.forEach(number => {
        total += cube(number);
    });
    return total;
};

