// Quetion 1: Print the count of each charactor present in the given string.

const str = "hare krishna hare rama, rama rama hare hare";

const obj = {};
for (let x of str) {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
}

console.log(obj);
