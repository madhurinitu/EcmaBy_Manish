'use-strict'

// let a = 10;
// console.log("a is: ", a);

// -------------------------------------------- Hoisting
// Hoisting - Hoisting is not supported

// a = 10;
// console.log("a is: ", a);
// let a;

// ------------------------------------- Not Typesafe (Dynamically Typed)
// let a = 10;
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "Manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// -------------------------------------
// You cannot create a variable with same name using let keyword, in same scope

// let a = 10;
// // let a = "Manish";               // Error: Identifier 'a' has already been declared.
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// ------------------------------------------------------
// ECMASCRIPT 2015, with let keyword we get
// Global Scope
// Function (Local) Scope
// Block Scope

// let a = 10;

// function test() {
//     if (true) {
//         let a = 100;                // Block Scoped Variable
//         console.log("Inside block(), a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// ---------------------

var i = "Hello";
console.log("Before, i:", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside Loop, i:", i);
}

console.log("After, i:", i);