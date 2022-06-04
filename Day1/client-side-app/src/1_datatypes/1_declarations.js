'use strict'
// console.log("Hello from declarations.js file");

// a = 10;
// console.log("a is: ", a);

// function test() {
//     a = 10;
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// // -------------------------------------------- After use strict

// var a = "Hello";        // Local to file

// function test() {
//     var a = 10;         // Local to function
//     console.log("Inside test(), a is: ", a);
// }

// test();
// console.log("Outside test(), a is: ", a);

// -------------------------------------------- Hoisting
// Hoisting - Hoisting is JavaScript Runtime's default behavior of moving declarations to the top before execution

// a = 10;
// console.log("a is: ", a);
// var a;

// // Only declarations are hoisted
// // console.log("a is: ", a);
// // var a = 10;

// // Runtime see the below code
// var a;
// console.log("a is: ", a);
// a = 10;

// ------------------------------------- Not Typesafe (Dynamically Typed)
// var a = 10;
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// a = "Manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// -------------------------------------
// You can create a variable with same name using var keyword
// Runtime will pick the nearest variable declaration/initilization

// var a = 10;
// var a = "Manish";
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// ------------------------------------------------
// Only Global and Function Scope is supported when using var keyword

// Global to this module (file)
// var a = 10;

// function test() {
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// --------------------------------------

// var a = 10;

// function test() {
//     var a = 100;                // Local Variable (Function Scoped)
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// --------------------------------------
// Block Scoping is not supported with var keyword

// var a = 10;

// function test() {
//     if (true) {
//         var a = 100;                // Local Variable (Function Scoped)
//         console.log("Inside block(), a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// -------------------

var i = "Hello";
console.log("Before, i:", i);

// for (var i = 0; i < 5; i++) {
//     console.log("Inside Loop, i:", i);
// }

// for (var _i = 0; _i < 5; _i++) {
//     console.log("Inside Loop, _i:", _i);
// }

// function iterate() {
//     for (var i = 0; i < 5; i++) {
//         console.log("Inside Loop, i:", i);
//     }
// }

// iterate();

// IIFE (Immediatly Invoked Function Expression)
(function () {
    for (var i = 0; i < 5; i++) {
        console.log("Inside Loop, i:", i);
    }
})();

console.log("After, i:", i);