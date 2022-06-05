const Person = (function () {
    function Person(name, age) {
        // Data Property
        this._name = name;
        this._age = age;
    }

    // Accessor Property
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        }
    });

    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        }
    });

    return Person;
})();

var p1 = new Person("Manish", 0);
console.log(p1.Name);               // get
console.log(p1.Age);                // get

p1.Name = "Abhijeet";               // set
p1.Age = 20;                        // set
console.log(p1.Name);               // get
console.log(p1.Age);                // get