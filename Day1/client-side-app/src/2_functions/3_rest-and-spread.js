// If we use, ... operator, on the lefthand side of assignment operator - REST
// If we use, ... operator, on the righthand side of assignment operator - SPREAD

// In ECMAScript 2015, we can use ... only with Iterable Objects (Arrays)
// In ECMAScript 2018, we can use ... with normal Objects also

// ----------------------------------------------------------- Array Spread

// var arr1 = [10, 20, 30, 40, [50, 60]];

// // Reference Copy
// // var arr2 = arr1;

// // Shallow Copy
// // var arr2 = new Array();
// // arr2[0] = arr1[0];
// // arr2[1] = arr1[1];
// // arr2[2] = arr1[2];
// // arr2[3] = arr1[3];
// // arr2[4] = arr1[4];

// // var arr2 = [].concat(arr1);
// // var arr2 = [...arr1];

// // Deep Copy
// var arr2 = JSON.parse(JSON.stringify(arr1));

// arr2[0] = 1000;
// arr2[4][0] = 5000;

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);

// -----------------------------------

// var arr1 = [10, 20, 30];
// var arr2 = [40, 50, 60];

// // var arr3 = arr1.concat(arr2);
// var arr3 = [...arr1, ...arr2];

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);
// console.log("Array 3", arr3);

// ----------------------------------------------------------------- Array Destructuring & Rest

// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// // Destructuring
// // var x = arr[0];
// // var y = arr[1];
// // var z = [arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]];

// // // ECMASCRIPT 2015 - Destructuring
// // var [x, y, z] = arr;

// // ECMASCRIPT 2015 - Destructuring with Rest
// var [x, y, ...z] = arr;

// console.log(`x = ${x}, y = ${y}`);
// console.log(`z = ${z}`);

// ----------------------------------------------------------- Object Spread (ECMAScript 2018)

// var person1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // Reference Copy
// // var person2 = person1;

// // // Shallow Copy
// // var person2 = {};
// // person2.id = person1.id;
// // person2.name = person1.name;
// // person2.address = person1.address;

// // ECMASCRIPT 2015 - Shallow Copy
// // var person2 = Object.assign({}, person1);

// // ECMAScript 2018 - Shallow Copy (Object Spread)
// var person2 = { ...person1 };

// person2.name = "Abhijeet";
// person2.address.city = "Mumbai";

// console.log("Person 1:", person1);
// console.log("Person 2:", person2);

// -------------------------------------------------------- Object Destructuring With Rest (ECMAScript 2018)
var person = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411028 };

// Destructuring
// var id = person.id;
// var ename = person.ename;
// var address= {
//     city: person.city,
//     state: person.state,
//     pin: person.pin
// };

// ECMASCRIPT 2018 - Object Destructuring
// var { id, ename, address } = person;

// ECMASCRIPT 2018 - Object Destructuring with Rest
var { id, ename, ...address } = person;

console.log("Id:", id);
console.log("Name:", ename);
console.log("Address:", address);