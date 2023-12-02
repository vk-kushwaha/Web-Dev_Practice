console.log(process.argv);

let arr = process.argv.slice(2);

for (let item of arr) {
    console.log(item);
}

// let n = process.argv.pop();

// for (let item = 1; item <= n; item++) {
//     console.log(item)
// }