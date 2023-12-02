let items = [250, 645, 300, 900, 50];
// let i = 0;
// for( let val of items){
//     let offer = val/10;
//     items[i] = items[i]-offer;
    
//     i++; 

// }

// console.log(items);


// items.push(100, 120, 150);

// console.log(items);

// items.pop();
// console.log(items);

// create an array to store companies -> "Blooberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"

// A). Remove the first Company from array.
// B). Remove Uber & add OLA in its place
// C). Add Amazon at the end.

let Company = ["Blooberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

// Remove the first Company from array.

// let NewCompany = Company.shift();
// console.log(NewCompany);
// console.log(Company);


// B). Remove Uber & add OLA in its place

// Company.splice(2,1,"OLA");
// console.log(Company);


// C). Add Amazon at the end.

Company.push("Amazon");
console.log(Company);