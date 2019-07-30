// Function constructor
// Always start a Function Constructor with a capital letter
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};
*/

/*
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    */
/*
this.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}
*/
/*
}

//Method
Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

//Property
Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
//FUNCTION CONSTRUCTOR
/*
var LiverpoolPlayers = function (firstName, lastName, age, position, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.position = position;
    this.country = country;
}

//INSTANCES
var bobby = new LiverpoolPlayers('Roberto', 'Firmino', 24, 'Center Forward', 'Brazil');
var salah = new LiverpoolPlayers('Mohammad', 'Salah', 26, 'Right Wing', 'Egypt');
var sadio = new LiverpoolPlayers('Sadio', 'Mane', 27, "Left Wing", 'Senegal');
var gini = new LiverpoolPlayers('Georgino', "Wijnaldum", 29, 'Central Midfield', 'Netherland');

//INHERITANCE
//Adding method to prototype
LiverpoolPlayers.prototype.retirementAge = function () {
    console.log(35 - this.age);
}

//Adding Property to Prototype
LiverpoolPlayers.prototype.team = 'Liverpool FC';

bobby.retirementAge();
salah.retirementAge();
sadio.retirementAge();
gini.retirementAge();
*/

// Object.create
/*
var personProto = {
    calculateAge: function () {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

//Option 2

var jane = Object.create(personProto, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1968
    },
    job: {
        value: 'designer'
    }
})
*/

//Primitives vs objects


//Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);
//46
//23

//Objects
var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
//30
//30

//Functions
var age = 27
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);