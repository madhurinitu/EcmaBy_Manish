console.log("Hello from Main File....");

const obj = {
    arr: [1, 2, 3, 4, 5],
    printArr() {
        console.log(...this.arr);       // Array Spread (ECMAScript 2015)
    }
};

obj.printArr();