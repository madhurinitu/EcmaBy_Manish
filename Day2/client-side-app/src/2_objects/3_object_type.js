// var toy1 = new Object();
// console.log(toy1);
// console.log(typeof toy1);

// console.log(toy1.constructor);
// console.log(toy1.toString());

// // Dunder Proto (Should not be used in Code)
// console.log(toy1.__proto__);
// console.log(Object.prototype);
// console.log(Object.prototype === toy1.__proto__);

// ---------------
// var toy1 = new Object();
// toy1.color = "red";
// toy1.shape = "circle";

// // console.log(toy1);

// var toy2 = new Object();
// // console.log(toy2);

// toy2.color = "blue";
// toy2.shape = "square";

// console.log("Toy 1 Color", toy1.color);
// console.log("Toy 1 Shape", toy1.shape);

// console.log("Toy 2 Color", toy2.color);
// console.log("Toy 2 Shape", toy2.shape);

// ---------------
// var toy1 = new Object();
// var toy2 = new Object();

// console.log(toy1.__proto__);
// console.log(toy2.__proto__);

// console.log(toy1.__proto__ === toy2.__proto__);
// console.log(Object.prototype === toy1.__proto__);
// console.log(Object.prototype === toy2.__proto__);

// ---------------
var toy1 = new Object();
var toy2 = new Object();

Object.prototype.color = "red";
Object.prototype.shape = "circle";

console.log("Toy 1 Color", toy1.color);
console.log("Toy 1 Shape", toy1.shape);

console.log("Toy 2 Color", toy2.color);
console.log("Toy 2 Shape", toy2.shape);

toy2.color = "blue";
toy2.shape = "square";

console.log("\n");
console.log("Toy 1 Color", toy1.color);
console.log("Toy 1 Shape", toy1.shape);

console.log("Toy 2 Color", toy2.color);
console.log("Toy 2 Shape", toy2.shape);

console.log(toy1);
console.log(toy2);

var ename = "Manish";

String.prototype.check = function() {
    console.log("Check Function...");
}

ename.check();