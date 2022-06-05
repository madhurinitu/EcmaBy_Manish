// let set = new Set();

// // console.log(set);
// // console.log(typeof set);
// // console.log(set.size);

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// set.add(5);

// // console.log(set);

// for (const item of set) {
//     console.log(item);
// }

// set.add(1);
// set.add(2);
// set.add(3);
// set.add(6);
// set.add(7);

// console.log("\nAfter Adding new items....");
// for (const item of set) {
//     console.log(item);
// }

// ---------------------------------------------------------------------
// Create a new array from the below array with unique items only

var arr = [10, 20, 30, 40, 50, 30, 40, 50, 11, 60, 70, 99];

var mySet = new Set(arr);
// console.log(mySet);

var unique = Array.from(mySet);
console.log(unique);

console.log(Array.from(new Set(arr)));
