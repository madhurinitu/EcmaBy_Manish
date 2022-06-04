// // Function Declaration Syntax - Is Hoisted

// function hello1() {
//     console.log("Hello One from JavaScript World!");
// }

// hello1();

// // Function Expression Syntax - Is Not Hoisted

// const hello2 = function () {
//     console.log("Hello Two from JavaScript World!");
// };

// hello2();

// // Function Constructor Syntax - Is Not Hoisted

// const hello3 = new Function('console.log("Hello Three from JavaScript World!");');

// hello3();

// // Arrow Function Syntax - Is Not Hoisted

// const hello4 = () => {
//     console.log("Hello Four from JavaScript World!");
// };

// hello4();

// -------------------------------------------------------

// var i = 10;
// console.log("i is:", i);
// console.log("Type of i is:", typeof i);

// var f = function() {
//     console.log("Hello");
// };
// console.log("f is:", f);
// console.log("Type of f is:", typeof f);

// Function is a type, which can refer to a block of code (Function Pointers / Delegates)

// Can we create a variable of type number?
// If yes; We should be able to create a variable of type function also

// Can we create a variable of type number inside a function?
// If yes; We should be able to create a variable of type function inside a function also (Nested Functions)

// function f1() {
//     function f2() {

//     }
// }

// Can we return a variable of type number from a function?
// If yes; We should be able to return a variable of type function from a function also (Closuers/Currying/Higher Order Functions)

// function f1() {
//     function f2() {

//     }

//     return f2;
// }

// Can we pass a variable of type number to a function?
// If yes; We should be able to pass a variable of type function to a function also (Callbacks)

// function test(x) { }

// test(10);
// test(function () { });