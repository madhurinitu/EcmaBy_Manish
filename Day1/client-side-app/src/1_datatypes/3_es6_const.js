// let a;
// console.log("a is:", a);

// // Error: Missing initializer in const declaration.
// // const env;
// // console.log("env is:", env);

// const env = "dev";
// console.log("env is:", env);

// // TypeError: Assignment to constant variable
// env = "prod";
// console.log("env is:", env);

// ----------------------------------------
// You cannot create a variable with same name in the same scope using const keyword

// const a = 10;
// const a = "Manish";               // Error: Identifier 'a' has already been declared.
// console.log("a is: ", a);
// console.log("Type of a is: ", typeof a);

// ----------------------------------------------------
// Const supports Block Scoping

// const env = "dev";
// console.log("Outside Block, env is:", env);

// if (true) {
//     const env = "prod";
//     console.log("Inside Block, env is:", env);
// }

// ----------------------------------------------------

const person = { id: 1, name: "Manish" };
console.log(person);

person.id = 1000;
person.name = "Abhijeet";
person.city = "Pune";

console.log(person);

delete person.id;
console.log(person);

// person = { id: 10 };                // TypeError: Assignment to constant variable.
// console.log(person);