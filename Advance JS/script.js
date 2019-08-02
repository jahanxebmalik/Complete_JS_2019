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
/*
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

//27
// San Francisco
*/

//Passing functions as arguments
/*
var years = [1985, 1947, 2016, 1965, 1999];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el))
    } else {
        return 'Not Applicable';
    }
}

var ages = arrayCalc(years, calculateAge);
var aboveAge = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(aboveAge);
console.log(heartRate);
*/

// Functions returning functions
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');

interviewQuestion('designer')('Ghous');
*/


// Immediately Invoked Function Expressions (IIFE)
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();
*/

//or
//IIFE: Used for data privacy and can't be accessed from global scope
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);
*/

//Closures
/*
An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned
*/
/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
*/

/*
function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');
*/

//Bind, Call and Apply Methods
/*
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' year\'s old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + '. I\'m a ' + this.job + ' and I\'m ' + this.age + ' year\'s old. Have a nice ' + timeOfDay + '!');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation("formal", "morning");
john.presentation.call(emily, 'friendly', 'afternoon');

//john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



var years = [1990, 1965, 1937, 2005, 2000];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

//Scope
/*
//Root Scope (window)
var fun = 5;

function funFunction() {
    //child scope
    var fun = 'helloooo';
    console.log(1, fun);
};

function funerFunction() {
    //child scope
    var fun = 'byeeeeee';
    console.log(2, fun);
};

function funestFunction() {
    //child scope
    var fun = 'Blaaaaah';
    console.log(3, fun);
};

console.log('window', fun);
funFunction();
funerFunction();
funestFunction();
*/