// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// // I want to log the arguments passed to the add and sub function
// // Where should we write the code?

// console.log(add(2, 3));
// console.log(sub(20, 3));

// ------------------------------------------------------------

// function add(x, y) {
//     console.log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     console.log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// console.log(add(2, 3));
// console.log(sub(20, 3));

// ------------------------------------------------------------

// function add(x, y) {
//     log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// function log(message) {
//     console.log(message);
// }

// console.log(add(2, 3));
// console.log(sub(20, 3));

// ------------------------------------------------------------

// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// Higher Order Function
// function logDecorator(fn) {
//     return function(...args) {
//         console.log(`${fn.name} called with args, ${args}`);
//         // let result = fn(...args);
//         // return result;

//         // return fn(...args);

//         let result = fn.call(this, ...args);
//         return result;
//     }
// }

// var addWithLogger = logDecorator(add);
// var subWithLogger = logDecorator(sub);

// console.log(addWithLogger(2, 3));
// console.log(subWithLogger(20, 3));

// // ----------------------------------------------------------------------
// // Handle Exceptions of the code using Higher Order Function

// function m1(x, y) {
//     throw Error("Invalid Arguments....");
// }

// // try {
// //     m1(20, 30);
// // } catch (e) {
// //     console.error(e.message);
// // }

// // try {
// //     m1(20, 30);
// // } catch (e) {
// //     console.error(e.message);
// // }

// function errorHandlerDecorator(fn) {
//     return function(...args) {
//         try {
//             let result = fn.call(this, ...args);
//             return result;
//         } catch(e) {
//             console.error(e.message);
//         }
//     }
// }

// errorHandlerDecorator(m1)(20,30);
// errorHandlerDecorator(m1)(20,30);

// ---------------------------------------------------------------------- Future Change (Annotations) (Decorators)
// https://github.com/tc39/proposal-decorators

@errorHandler()
function m1(x, y) {
    throw Error("Invalid Arguments....");
}

function errorHandler(fn) {
    return function(...args) {
        try {
            let result = fn.call(this, ...args);
            return result;
        } catch(e) {
            console.error(e.message);
        }
    }
}

m1(20,30);
m1(21,31);