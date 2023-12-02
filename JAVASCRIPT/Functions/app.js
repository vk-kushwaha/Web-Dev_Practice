// function sum(a, b) {
//    console.log(a + b)
// }
// sum(15, 25);


// function sum(a, b) {
//    let s = a + b;
//    return s;
// }

// let val = sum(14, 22);
// console.log(val);


// --------------------Arrow function-----------------------

// let sum = (a, b) => {
//    let s = a + b;
//    console.log(s);
// };

// let multiply = (a, b) => {
//    console.log(a * b);
// }


// Question 1.  creat a function using the function keyword that takes a string as an argument & return
// the number of vowels in string/


// function countVowel(str) {
//    let count = 0;
//    for (let char of str) {
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//          count++;
//       }
//    }
//    return count;
// }



// Quetion 2. Creat an arrow function for the same.

// let countVowel = (str) => {
//    let count = 0;
//    for (let char of str) {
//       if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//          count++;
//       }
//    }
//    return count;
// }



// let arr = [1, 2, 3, 4, 5];

// arr.forEach((val) => {

//    console.log(val);
// })

// let arr2 = ["pune", "mumbai", "delhi", "gujrat", "mp"];

// arr2.forEach((val) => {

//    console.log(val.toUpperCase());
// })


// Question 3. For a given array of a number , print the square of each value using the forEach loop.

//  let arr = [1, 2, 3, 4, 5, 7, 9, 11, 13, 16, 17];

// arr.forEach((val) => {
//    console.log(val * val);
// })
// let arr = [1, 2, 3, 4, 5, 7, 9, 11, 13, 16, 17];

// let evenarr = arr.filter((val) => {
//    return val % 2 === 0;
// })

// console.log(evenarr);


// let oddarr = arr.filter((val) => {
//    return val % 2 !== 0;
// })

// console.log(oddarr);



// -------- Javascript demo : array.reduce()---------------------
// let arr = [1, 2, 3, 4, 5, 7, 9, 11, 13, 16, 17];

// const output = arr.reduce((prev, res) => {
//    return prev + res;
// })

// console.log(output);

// const MaxNum = arr.reduce((prev, res) => {
//    return prev > res ? prev : res;
// })

// console.log(MaxNum);


// Question  We are given an array of marks of student. Filter out of the marks of student that scored 90+.

// let marks = [87, 83, 90, 93, 95, 44, 69, 99, 91];
// let topper = marks.filter((val) => {
//    return val > 90;
// })
// console.log(topper);

// Question: take a number n as inout from user. Creat an array from 1 to n.

// let n = prompt("Enter a nummber");
// let arr = [];
// for (let i = 1; i <= n; i++) {
//    arr[i - 1] = i;
// }

// console.log(arr);


// Question : Use the reduce method to calculate sum of the all number in the array.



let arr = [1, 2, 3, 4, 5, 7, 9];

// const Sum = arr.reduce((prev, res) => {
//    return prev + res;
// })
// console.log(Sum);




// Question : Use the reduce method to calculate product of the all number in the array.

const product = arr.reduce((prev, res) => {
   return prev * res;
})
console.log(product);







































