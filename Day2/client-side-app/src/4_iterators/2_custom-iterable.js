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

    [Symbol.iterator]() {
        let i = 0;
        const self = this;

        return {
            next: function () {
                let v, d = true;

                if (self._dataArray[i] !== undefined) {
                    v = self._dataArray[i];
                    d = false;
                    i += 1;
                }

                return {
                    value: v,
                    done: d
                };
            }
        };
    }
}

let ordersQueue = new Queue();
ordersQueue.push("Order Id: 1");
ordersQueue.push("Order Id: 2");
ordersQueue.push("Order Id: 3");

// console.log(ordersQueue.pop());
// console.log(ordersQueue.pop());
// console.log(ordersQueue.pop());

for (const order of ordersQueue) {
    console.log(order);
}