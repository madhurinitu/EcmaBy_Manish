function add1(x, y) {
    return x + y;
}

const add2 = function (x, y) {
    return x + y;
}

// Multiline Arrow
const add3 = (x, y) => {
    return x + y;
}

// Singleline Arrow
// return is implicit, if you remove the curly braces ({})
const add4 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));