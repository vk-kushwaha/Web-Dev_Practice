// Question 1: Create an array of number and  take a nubmer from user to add this array.

// let arr = [20, 30, 22, 10, 3, 43, 21, 43, 22];
// let a = prompt("Enter a number");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);

// Question 2: Keep adding numbers to this array while 0 added to this array.

// let arr = [20, 30, 22, 10, 3, 43, 21, 43, 22];
// let a;
// do {
//   a = prompt("Enter a number");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);
// {
//   console.log(arr);
// }

// Question 3:Filter number from array which are divisible by 10.

// let arr = [20, 30, 22, 10, 3, 43, 21, 40, 22];

// let n = arr.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// Question 4: Create an array of aquare of given array.

// let arr = [20, 30, 22, 10, 3, 43, 21, 40, 22];

// let n = arr.map((x) => {
//   return x * x;
// });

// console.log(arr);
// console.log(n);

// Question 5: Use reduce method to calculate factorial of a given number from an array of first n natural number.
// (n being the number whose factorial can be calculated.)

let arr = [1, 2, 3, 4, 5, 6];

let fact = arr.reduce((x1, x2) => {
  return x1 * x2;
});

console.log(arr);
console.log("Factorial of given array = " + fact);
