// Case 1 - Default Import
// import square from './lib';
// console.log("Square: ", square(20));

// import sqr from './lib';
// console.log("Square: ", sqr(20));

// import * as l from './lib';
// console.log("Square: ", l.default(20));

// Case 2 - Named Import
// import { square } from './lib';
// console.log("Square: ", square(40));

// import { square as sqr } from './lib';
// console.log("Square: ", sqr(40));

// import * as l from './lib';
// console.log("Square: ", l.square(30));

// Case 3 - Multiple Imports
// import square, { check, test } from './lib';
// console.log("Square: ", square(20));
// console.log("Check: ", check(20));
// console.log("Test: ", test(20));

import sqr, { check as chk, test as tst } from './lib';
console.log("Square: ", sqr(20));
console.log("Check: ", chk(20));
console.log("Test: ", tst(20));

// Import an entire module for side effects only, without importing anything. 
// This runs the module's global code, but doesn't actually import any values.
// import './lib';
// // You will not be able to call the methods as follows
// console.log("Square: ", square(20));
// console.log("Check: ", check(20));
// console.log("Test: ", test(20));