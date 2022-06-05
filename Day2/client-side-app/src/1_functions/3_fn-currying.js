// function greetings(message, name) {
//     console.log(`${message}, ${name}`);
// }

// greetings("Good Morning", "Abhijeet");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Subodh");

// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 77.61, 0, 100));
// console.log(Converter(" INR", 77.61, 0, 250));
// console.log(Converter(" INR", 77.61, 0, 699));
// console.log(Converter(" INR", 77.61, 0, 999));

// ------------------------------------------------------- Currying

// function greetings(message) {
//     return function (name) {
//         console.log(`${message}, ${name}`);
//     }
// }

// const mGreet = greetings("Good Morning");
// mGreet("Abhijeet");
// mGreet("Ramakant");
// mGreet("Subodh");

// const aGreet = greetings("Good Afternoon");
// aGreet("Abhijeet");
// aGreet("Ramakant");
// aGreet("Subodh");


function Converter(toUnit, factor, offset) {
    return function (input) {
        return [((offset + input) * factor).toFixed(2), toUnit].join("");
    }
}

const usdToInrConverter = Converter(" INR", 77.61, 0);
console.log(usdToInrConverter(100));
console.log(usdToInrConverter(250));
console.log(usdToInrConverter(699));
console.log(usdToInrConverter(999));

console.log("\n");
const milesToKmConverter = Converter(" KM", 1.6, 0);
console.log(milesToKmConverter(100));
console.log(milesToKmConverter(250));
console.log(milesToKmConverter(699));
console.log(milesToKmConverter(999));