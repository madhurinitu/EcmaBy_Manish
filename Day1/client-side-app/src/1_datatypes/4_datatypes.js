let language;
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

language = null;
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

// language = 10;
// language = 10.5;
// language = Number.MAX_SAFE_INTEGER;
// language = 0b1001;
// language = 0o1001;
language = 0x1001;
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

// language = "JavaScript";
// language = 'JavaScript';

// ECMAScript 2015 - Template/String Literals - Multi-line String
// language = `Java

//     Script`;

var fname = "Manish";
var lname = "Sharma";

// language = "Hello, " + fname + " " + lname;
language = `Hello, ${fname} ${lname}`;
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

language = true;
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

// ECMAScript 2015 - Symbol - Unique Immutables
language = Symbol("Hello");
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

language = String(10);
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

language = new Object();
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);

language = new String(10);
console.log("Language is:", language);
console.log("Type of Language is:", typeof language);