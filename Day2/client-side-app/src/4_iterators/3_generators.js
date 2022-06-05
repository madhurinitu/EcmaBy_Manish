// // Eager Execution
// function idNormal() {
//     console.log("Hello from idNormal Function");
// }

// // Lazy Executed
// function* idGen() {
//     console.log("Hello from idGen Function");
// }

// idNormal();
// idGen();

// ----------------------------------------------------------
// function* idGen() {
//     console.log("Hello from idGen Function");
// }

// let seq = idGen();
// // console.log(seq);
// console.log(seq.next());


// ----------------------------------------------------------
// function* idGen() {
//     yield 1;
//     yield 2;
//     yield 3;
//     console.log("Last Line of idGen Function");
// }

// let seq = idGen();
// // console.log(seq.next());
// // console.log(seq.next());
// // console.log(seq.next());
// // console.log(seq.next());

// for (const id of idGen()) {
//     console.log(id);
// }

// -----------------------------------------------------------

class Queue {
    constructor() {
        this._dataArray = [];
    }

    push(data) {
        this._dataArray.push(data);
    }

    pop() {
        return this._dataArray.shift();
    }

    // *[Symbol.iterator]() {
    //     for (let i = 0; i < this._dataArray.length; i++) {
    //         yield this._dataArray[i];
    //     }   
    // }

    *[Symbol.iterator]() {
        yield* this._dataArray;
    }
}

let ordersQueue = new Queue();
ordersQueue.push("Order Id: 1");
ordersQueue.push("Order Id: 2");
ordersQueue.push("Order Id: 3");

for (const order of ordersQueue) {
    console.log(order);
}