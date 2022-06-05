// var employees = new Array();
// var employees = new Array(2);

// employees.push("Manish");
// employees.push("Abhijeet");
// employees.push("Ramakant");

// employees.unshift("Manish");
// employees.unshift("Abhijeet");
// employees.unshift("Ramakant");

// employees[0] = "Manish";
// employees.splice(1, 1, "Abhijeet");

// var employees = new Array("Subodh", "Ram");
// var employees = new Array(10,20);

// var employees = new Array("Subodh");
// var employees = new Array(10);
// var employees = Array.of(10);

// var arr = [10, 20, 30, 40, 50];
// var employees = new Array(arr);
// var employees = Array.from(arr);
// var employees = [...arr];

// console.log(employees);
// console.log(typeof employees);
// console.log(employees.length);

// ------------------------------------------------------------ Iterate

var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Varun" },
    { id: 3, name: "Paresh" },
    { id: 4, name: "Devesh" },
    { id: 5, name: "Atul" },
    { id: 6, name: "Abhishek" }
];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`${i}        ${JSON.stringify(employees[i])}`);    
// }

// for (const i in employees) {
//     console.log(`${i}        ${JSON.stringify(employees[i])}`);    
// }

// employees.forEach((item, index, arr) => {
//     console.log(`${index}        ${JSON.stringify(item)}`);    
// });

// ECMASCRIPT 2015 - for-of loop
// for (const item of employees) {
//     console.log(`${JSON.stringify(item)}`);    
// }

// for (const pair of employees.entries()) {
//     console.log(`${JSON.stringify(pair)}`);    
// }

// for (const [index, item] of employees.entries()) {
//     console.log(`${index}        ${JSON.stringify(item)}`);
// }

// ----------------------------------------------------------------

// Create a new Array with all the Names in uppercase from employees Array (Transformation)

var names = employees.map(employee => employee.name.toUpperCase());
console.log(names);

// Create a new Array with all the Ids from employees Array (Transformation)
var ids = employees.map(employee => employee.id);
console.log(ids);

// Write a code which will add all numbers in the ids array (Sum of all ids)
var sum = ids.reduce((acc, cur) => acc + cur);
console.log(sum);