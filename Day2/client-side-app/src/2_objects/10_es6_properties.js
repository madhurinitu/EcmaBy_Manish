// Constructor Function
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get Name() {
        return this._name;
    }

    set Name(value) {
        this._name = value;
    }

    get Age() {
        return this._age;
    }

    set Age(value) {
        this._age = value;
    }
}

var p1 = new Person("Manish", 0);
console.log(p1.Name);               // get
console.log(p1.Age);                // get

p1.Name = "Abhijeet";               // set
p1.Age = 20;                        // set
console.log(p1.Name);               // get
console.log(p1.Age);                // get