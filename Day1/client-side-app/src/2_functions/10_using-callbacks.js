// // Dev 1
// function add(x, y) {
//     return x + y;
// }

// // Dev 2
// function showResult(result) {
//     document.getElementById("divResult").innerHTML = result;
// }

// var result = add(2, 3);
// showResult(result);

// --------------------------------------

// // Dev 1
// function showResult(result) {
//     document.getElementById("divResult").innerHTML = result;
// }

// function add(x, y) {
//     var result = x + y;
//     showResult(result);
// }

// // Dev 2
// add(2, 3);

// --------------------------------------

// // Dev 1
// function add(x, y, cb) {
//     var result = x + y;
//     cb(result);
// }

// // Dev 2
// function showResult(result) {
//     document.getElementById("divResult").innerHTML = result;
// }

// add(2, 3, showResult);

// add(12, 23, function (result) {
//     document.getElementById("pResult").innerHTML = result;
// });

// add(42, 33, (result) => {
//     document.getElementById("hOneResult").innerHTML = result;
// });

// // -------------------------------------- Pull
// // Dev 1
// function getString() {
//     const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
//     var str = strArr[Math.floor(Math.random() * strArr.length)];
//     return str;
// }

// // Dev 2
// // var s = getString();
// // console.log(s);

// setInterval(() => {
//     var s = getString();
//     console.log(s);
// }, 2000);

// // What will happen if getString Takes inderterministic time to execute
// // Call 1 - 1000
// // Call 2 - 3000
// // Call 3 - 1000

// -------------------------------------- Push
// Dev 1
function pushString(cb) {
    const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];

    setInterval(() => {
        var str = strArr[Math.floor(Math.random() * strArr.length)];
        cb(str);
    }, 2000);
}

// Dev 2
// pushString(function (s) {
//     console.log(s);
// });

// pushString(function (s) {
//     console.log("C1 - ", s);
// });

// pushString(function (s) {
//     console.log("C2 - ", s);
// });

pushString((s) => {
    console.log("C1 - ", s);
});

pushString((s) => {
    console.log("C2 - ", s);
});