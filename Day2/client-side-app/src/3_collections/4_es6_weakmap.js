// let myMap = new Map();

// let obj1 = { id: 1 };
// let obj2 = { id: 2 };

// myMap.set(obj1, 'This is the value for Object One');
// myMap.set(obj2, 'This is the value for Object Two');

// obj1 = undefined;

// -----------------------------------------------------
let wMap = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

wMap.set(obj1, 'This is the value for Object One');
wMap.set(obj2, 'This is the value for Object Two');

obj1 = undefined;

// WeakMap keys must be object
// WeakMap is not iterable
for (const item of wMap) {
    console.log(item);
}