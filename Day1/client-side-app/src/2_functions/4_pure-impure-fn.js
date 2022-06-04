// var arr = [10, 20, 30];

// // Impure Function
// // function append(dataArr, item) {
// //     dataArr[dataArr.length] = item;
// //     return dataArr;
// // }

// // Pure Function - Immutability should be followed
// function append(dataArr, item) {
//     var rArr = [...dataArr];
//     rArr[rArr.length] = item;
//     return rArr;
// }

// var newArr1 = append(arr, 100);
// console.log(newArr1);               // Expected: [10, 20, 30, 100]

// var newArr2 = append(arr, 100);
// console.log(newArr2);               // Expected: [10, 20, 30, 100]

// Assignment ---------------------------------------------------------------------------------------------
// Do not use builtin filter method

var employees = ["Akshay", "Basavaraj", "Bhavya", "Bibhu", "Chethan", "Chhavi"];

function filter(dataArr, x) {
    let newArr = [];

    for(const name of dataArr) {
        // if(name[0] === x) {
        //     newArr.push(name);
        // }
        
        // if(name.charAt(0) === x) {
        //     newArr.push(name);
        // }

        // if(name.startsWith(x)) {
        //     newArr.push(name);
        // }

        var testString = "^" + x;
        if(name.match(testString)) {
            newArr.push(name);
        }
    }

    return newArr;
}

var result1 = filter(employees, 'A');
console.log(result1);                   // ["Akshay"];

var result2 = filter(employees, 'B');
console.log(result2);                   // ["Basavaraj", "Bhavya", "Bibhu"];

var result3 = filter(employees, 'C');
console.log(result3);                   // ["Chethan", "Chhavi"];

console.log(employees);                 // ["Akshay", "Basavaraj", "Bhavya", "Bibhu", "Chethan", "Chhavi"];