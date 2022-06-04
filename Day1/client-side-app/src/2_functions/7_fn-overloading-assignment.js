// const Add = (function () {
//     function m1(x, y) {
//         return x + y;
//     }

//     function m2(x, y, z) {
//         return x + y + z;
//     }

//     return function () {
//         if (arguments.length === 2)
//             return m1(arguments[0], arguments[1]);
//         else if (arguments.length === 3)
//             return m2(arguments[0], arguments[1], arguments[2]);
//         else
//             throw Error("Invalid Parameters...");
//     }
// })();

function Add(...args) {
    if (args.length === 2)
        return args[0] + args[1];
    else if (args.length === 3)
        return args[0] + args[1] + args[2];
    else
        throw Error("Invalid Parameters...");
}

console.log(Add(2, 3));
console.log(Add(2, 3, 4));
try {
    console.log(Add(2));        // Show Error, if you are passing less than 2 or more than 3 arguments
} catch (e) {
    console.error(e.message);
}