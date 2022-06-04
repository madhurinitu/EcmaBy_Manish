// var a = 9007199254740991;
// var b = 9007199254740991;
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);

// var a = 2147483647;
// var b = 2147483647;

// console.log(a && b);
// console.log(a & b);

// -------------------------------------
// We cannot specify the type while declaring the varable
// We can provide any value to any variable
// We can use any operator with any operand type

// var result = 10 * true;
// console.log(result);

// console.log(true && "abc");
// console.log(false && "xyz");

// console.log(true ? "abc" : "xyz");
// console.log(false ? "abc" : "xyz");

// console.log(true && "abc" || "xyz");
// console.log(false && "abc" || "xyz");

// If isSelected(), returns true, I want to apply CSS class as text-info else text-danger

// // Angular
// <h2 class={{isSelected() && "text-info" || "text-danger"}}></h2>

// // React
// <h2 className={isSelected() && "text-info" || "text-danger"}></h2>

// var obj;
// var obj = undefined;
// var obj = null;
// var obj = { id: 1 };

// // if ((obj == null) || (obj == undefined))
// //     console.error("object is null or undefined");
// // else
// //     console.log("object is:", obj);

// if (!obj)
//     console.error("object is null or undefined");
// else
//     console.log("object is:", obj);

// console.log(Boolean(""));
// console.log(Boolean("Manish"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({ id: 1 }));

// --------------------------------------------- Compare
// let a = 10;
// let b = "10";

// console.log(typeof a);
// console.log(typeof b);

// console.log(a == b);            // Abstract Equality
// console.log(a === b);           // Strict Equality

let a = { id: 0 };
let b = { id: 0 };

console.log(a == b);            // Abstract Equality
console.log(a === b);           // Strict Equality

let c = b;
console.log(c == b);            // Abstract Equality
console.log(c === b);           // Strict Equality