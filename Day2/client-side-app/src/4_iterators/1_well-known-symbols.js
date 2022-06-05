let nameSymbol = Symbol("name");

let obj = {
    id: 1,
    [nameSymbol]: "Manish"
};

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.getOwnPropertySymbols(obj));

var arr = new Array();
console.log(Object.getOwnPropertyNames(arr));
console.log(Object.getOwnPropertySymbols(arr));
console.log(Object.getOwnPropertySymbols(Array.prototype));
