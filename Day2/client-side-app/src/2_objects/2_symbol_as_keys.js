// var person = {
//     id: 1,
//     name: "Manish",
//     username: "ManishS",
//     password: "ManishS",
//     address: {
//         city: "Pune"
//     }
// };

var password = Symbol("password");

var person = {
    id: 1,
    name: "Manish",
    [Symbol("username")]: "ManishS",
    [password]: "ManishS",
    address: {
        city: "Pune"
    }
};

console.log(person);
console.log(person[Symbol("username")]);
console.log(person[password]);


console.log(JSON.stringify(person));