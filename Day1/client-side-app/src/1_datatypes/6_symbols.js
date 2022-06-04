// ---------------------------------------------------------------- Primitive Type (Immutable)

// const color = "red";

// // Create a function, which should compare and give true, only if, color const is passed to it as an argument
// function isRedColor(arg) {
//     console.log(arg === color);
// }

// isRedColor(color);
// isRedColor("red");

// var clr = "red";
// isRedColor(clr);

// ---------------------------------------------------------------- Object (Mutable)

// const color = { code: "red" };

// // Create a function, which should compare and give true, only if, color const is passed to it as an argument
// function isRedColor(arg) {
//     console.log(arg === color);
// }

// isRedColor(color);
// isRedColor({ code: "red" });

// var clr = { code: "red" };
// isRedColor(clr);

// ---------------------------------------------------------------- Primitive Type (Immutable)
// Symbol (Unique Immutable)
const color = Symbol("red");

// Create a function, which should compare and give true, only if, color const is passed to it as an argument
function isRedColor(arg) {
    console.log(arg === color);
}

isRedColor(color);
isRedColor(Symbol("red"));

var clr = Symbol("red");
isRedColor(clr);