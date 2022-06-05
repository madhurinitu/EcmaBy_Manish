// var obj1 = null;
// console.log(obj1);
// console.log(typeof obj1);

// var obj2 = new Object();
// console.log(obj2);
// console.log(typeof obj2);

// var obj3 = {};
// console.log(obj3);
// console.log(typeof obj3);

// -----------------------------------

var person = {
    id: 1,
    name: "Manish",
    address: {
        state: "MH",
        pin: 411021
    },
    display: function() {
        console.log(this);
    }
}

// console.log(person);
// console.log(typeof person);

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
var person_json = JSON.stringify(person);

console.log(person);
console.log(typeof person);

console.log(person_json);
console.log(typeof person_json);

console.log(person.id);
console.log(person_json.id);

// Converts a JavaScript Object Notation (JSON) string into an object.
var p = JSON.parse(person_json);
console.log(p);
console.log(typeof p);
console.log(p.id);
