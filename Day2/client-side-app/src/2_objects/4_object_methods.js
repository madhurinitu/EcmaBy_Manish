// ---------------------------------------------------- Object.assign (Shallow Copy)

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let obj1 = Object.assign({}, source);

// obj1.name = "Abhijeet";
// obj1.address.city = "Mumbai";

// console.log(source);
// console.log(obj1);

// ---------------------------------------------------- Object.create
// Creates a new object, using an existing object as the prototype of the newly created object.

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let obj1 = Object.assign({}, source);
// let obj2 = Object.create(source);

// console.log("Source: ", source);
// console.log("Assign: ", obj1);
// console.log("Create: ", obj2);

// ---------------------------------------------------
// Add a New Property       - Allowed
// Delete a Property        - Allowed
// Modify Property Value    - Allowed

let source = { id: 1, name: "Manish" };

// // Add a New Property
// source.city = "Pune";
// console.log(source);

// // Delete a Property
// delete source.name;
// console.log(source);

// // Modify Property Value
// source.id = 1000;
// console.log(source);

// // ----------------------------
// // Add a New Property       - Not Allow
// // Delete a Property        - Allowed
// // Modify Property Value    - Allowed

// Object.preventExtensions(source);

// delete source.name;
// console.log(source);

// source.id = 1000;
// console.log(source);

// if (Object.isExtensible(source)) {
//     source.city = "Pune";
//     console.log(source);
// } else {
//     console.log("New properties can not be added to the object");
// }

// // ----------------------------
// // Add a New Property       - Not Allow
// // Delete a Property        - Not Allowed
// // Modify Property Value    - Allowed

// Object.seal(source);

// source.id = 1000;
// console.log(source);

// if (!Object.isSealed(source)) {
//     source.city = "Pune";
//     console.log(source);

//     delete source.name;
//     console.log(source);
// } else {
//     console.log("New properties can not be added and old properties can not be deleted on the object");
// }

// ----------------------------
// Add a New Property       - Not Allow
// Delete a Property        - Not Allowed
// Modify Property Value    - Not Allowed

Object.freeze(source);

if (!Object.isFrozen(source)) {
    source.city = "Pune";
    console.log(source);

    delete source.name;
    console.log(source);

    source.id = 1000;
    console.log(source);
} else {
    console.log("Object is freezed");
}