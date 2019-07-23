/* Variables and Data Types */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/************************
 Variable  mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/**********************
 * Basic operators
 */

// Math operators

/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//Typeof operator
console.log(typeof johnOlder); //Boolean
console.log(typeof ageJohn); // Number
console.log(typeof 'Mark is older than John');  //string
*/

/***********************
 * Operator precedence
 */
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;  //8 * 4 - 6 // 32-6 //26
console.log(x, y); //26 

//More operators
x = x * 2; // or 
x *= 2;

x = x + 1; //or
x += 1; //or
x++;

x = x - 1; //or
x--;
*/

/*********************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a Boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's" true).
*/
/*
var massMark = 80;
var heightMark = 1.52;
var massJohn = 90;
var heightJohn = 1.82;

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark); // 34.62
bmiJohn = massJohn / (heightJohn * heightJohn); // 27.17
console.log(bmiMark, bmiJohn);

var isHigher = bmiMark >= bmiJohn;
console.log("Is Mark's BMI higher than John's? " + isHigher);
*/


/***********************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is currently single! :(')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married yet')
}


var massMark = 80;
var heightMark = 1.52;
var massJohn = 90;
var heightJohn = 1.82;

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark * heightMark); // 34.62
bmiJohn = massJohn / (heightJohn * heightJohn); // 27.17
console.log(bmiMark, bmiJohn);

if (bmiMark > bmiJohn) {
    console.log('Mark has more BMI than John');
} else {
    console.log('John\'s BMI is more than Mark\'s');
}
*/

/***********************
 * Boolean logic
 * AND (&&), OR (||) & NOT (!)
 */

/*
var firstName = 'Jahanzeb';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { //Between 13 and 20
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}
*/

/***********************
 * The Ternary Operator and Switch Statements
 * AND (&&), OR (||) & NOT (!)
 */
/*
var firstName = 'Jahanzeb';
var age = 22;
var ageLimit = 21;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
//or
var drink = age >= ageLimit ? 'beer' : 'juice';
console.log(drink);
//or
*/

/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
console.log(drink);
*/

// Switch statement
/*
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 15;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}

var name = prompt('What is your name?');
var age = prompt('How old are you?');

switch (true) {
    case age < 18:
        alert(name + ', you are currently underage');
        break;
    case age >= 18 && age < 25:
        alert(name + ', this is your prime age');
        break;
    case age >= 25 && age < 60:
        alert(name + ', you are eligible to apply!');
        break;
    default:
        alert(name + ', it is your retirement age');
}
*/

/***********************
 * Truthy and Falsy values and equality operators
 */

/* FALSY VALUES: 
1. undefined, 
2. null, 
3. 0, 
4. '', 
5. NaN
*/

/* TRUTHY VALUES:
- NOT falsy values
*/
/*
var height;

height = 0;
if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}
*/

/***************************
 * CODING CHALLENGE 2
 */
/*
 John and Mike both play basketball in different teams. In the latest 3 Games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

 1. Calculate the average score for each team
 2. Decide which team wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
 3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

 4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator tot ake the decision.
 */
/* SOLUTION:
var johnAvgScore = (89 + 120 + 103) / 3;
var mikeAvgScore = (116 + 94 + 123) / 3;
var maryAvgScore = (97 + 134 + 105) / 3;

console.log('John: ' + johnAvgScore + ',', 'Mike: ' + mikeAvgScore + ' and Mary: ' + maryAvgScore);

if (johnAvgScore > mikeAvgScore && johnAvgScore > maryAvgScore) {
    console.log('John wins with the Avg. Score of ' + johnAvgScore);
} else if (mikeAvgScore > johnAvgScore && mikeAvgScore > maryAvgScore) {
    console.log('Mike wins with the Avg. Score of ' + mikeAvgScore);
} else if (maryAvgScore > mikeAvgScore && maryAvgScore > johnAvgScore) {
    console.log('Mary wins with the Avg. Score of ' + maryAvgScore);
} else {
    console.log('It is a draw');
}
*/

/*********************
 * Functions
 */
/*
function calculateAge(birthyear) {
    return 2019 - birthyear;
}

var ageJohn = calculateAge(1985);
var ageMike = calculateAge(1947);
var ageWill = calculateAge(1969);
console.log(ageJohn, ageMike, ageWill);


function yearsUntilRetirement(years, firstName) {
    var age = calculateAge(years);
    var yearRemaining = 60 - age;
    if (yearRemaining > 0) {
        console.log(firstName + ' has ' + yearRemaining + ' years until retirement!');
    } else {
        console.log(firstName + ' has already retired!')
    }
}

yearsUntilRetirement(1985, 'Jahanzeb'); //Jahanzeb has 26 years until retirement!
yearsUntilRetirement(1947, 'Mike'); //Mike has already retired!
yearsUntilRetirement(1969, 'Will'); //Will has 10 years until retirement!
*/

/*********************
 * Function Statements and Expressions
 */
/*
//Function declaration:
// function yourProfession(job, firstName) {}

//Function expression:
var yourProfession = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an Uber';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(yourProfession('teacher', 'John'));
console.log(yourProfession('driver', 'Kate'));
console.log(yourProfession('designer', 'William'));
console.log(yourProfession('developer', 'Ronaldo'));
*/

/*********************
 * Arrays
 */

//Two ways to create an Array:
/*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

//.push - Add at the end of an array
john.push('blue');
//.unshift - Add at the start of an array
john.unshift('Mr.');
// .pop - Removes element from the end of an array
john.pop();
// .shift - Removes element from the start of an array
john.shift();
console.log(john);

// indexOf - Let's you know the position of item in array or if the item exists in the array or not
// -1 indicates that item is not in the array list
console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

var isMarried = john.indexOf(true) === -1 ? 'John is NOT married' : 'John IS married';
console.log(isMarried);
*/

/***************************
 * CODING CHALLENGE 3
 */
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He liked to tip 20% of the bill  when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
*/
// MY SOLUTION
/*
var allTips = [];
var finalAmount = [];

function tipCalculator(billAmount) {
    if (billAmount < 50) {
        var billSmall = billAmount * .2;
        console.log(billSmall);
        allTips.push(billSmall);
        finalAmount.push(billSmall + billAmount);
    } else if (billAmount >= 50 && billAmount < 200) {
        var billMedium = billAmount * .15;
        console.log(billMedium);
        allTips.push(billMedium);
        finalAmount.push(billMedium + billAmount);
    } else {
        var billLarge = billAmount * .1;
        console.log(billLarge);
        allTips.push(billLarge);
        finalAmount.push(billLarge + billAmount);
    }
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);
console.log(allTips);
console.log(finalAmount);
*/

// JONAS SOLUTION
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

//console.log(tipCalculator(10));
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])
];
var finalValues = [
    [bills[0] + tips[0]],
    [bills[1] + tips[1]],
    [bills[2] + tips[2]]
];

console.log(tips, finalValues);
*/

/***************************
 * Objects and properties
 */

//Two ways to create an Object:
/*
1) Object literal 
var john = {
    key1: value1,
    key2: value2
};
2) new Object syntax
 var jane = new Object();
    jane.firstName = 'Jane',
    jane.birthYear = 1949,
    jane['lastName'] = 'Smith';

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

//console.log(john); //or
//console.log(john.firstName); //or
//console.log(john['lastName']);

var x = "birthYear";
console.log(john[x]);

//Mutate data
john.job = 'designer';
john['isMarried'] = true;
console.log(john);


var malik = new Object();

malik.firstName = 'Jahanzeb',
    malik.age = 34,
    malik['isMarried'] = true,
    malik.siblings = ['Taimur', 'Turab', 'Salman'];
console.log(malik['isMarried']);
*/

/***************************
 * Objects and methods
 */
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1999,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2019 - this.birthYear;
    }
};

//console.log(john.calcAge());
//john.age = john.calcAge();

john.calcAge();
console.log(john);


//Practice

var malik = {
    firstName: 'Jahanzeb',
    lastName: 'malik',
    birthYear: 1985,
    isMarried: true,
    hasChildren: true,
    son: 'Taimur',
    siblings: ['Taimur', 'Turab', 'Salman'],
    wife: 'komal',
    myAge: function () {
        this.age = 2020 - this.birthYear;
    }
}

malik.myAge();
console.log(malik);
*/

/***************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods. 
1. For each of them, create an object with properties with their full name, mass and height.
2. Then, add a method to each object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/
/*
//SOLUTION
var mark = {
    fullName: "Mark Miller",
    massMark: 78,
    heightMark: 1.69,
    calcBMI: function () {
        this.bmi = this.massMark / (this.heightMark * this.heightMark);
        return this.bmi;
    }
}

var john = {
    fullName: 'John Smith',
    massJohn: 92,
    heightJohn: 1.95,
    calcBMI: function () {
        this.bmi = this.massJohn / (this.heightJohn * this.heightJohn);
        return this.bmi;
    }
}



//console.log(mark, john);

if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has more BMI with ' + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has more BMI with ' + john.bmi);
} else {
    console.log('They both have equal BMI');
}
*/

/***************************
 * Loops and iteration
 */
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}
*/

/*
//for loop
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for (i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//While loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// Continue and break statements
/*
var john = ['John', 'Smith', 1990, 'designer', false];
for (i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//Looping backwards
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/***************************
 * CODING CHALLENGE 5
 */
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips and 2) an array containing final paid amounts (bill + tip).
HINT: Start with two empty arrays[] as properties and the fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110 and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300(different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have tume sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/


//MY SOLUTION
/*
var allTips = [];
var allBills = [];

var billsJohn = {
    billValues: [124, 48, 268, 180, 42],
    calcTip: function () {
        for (var i = 0; i < this.billValues.length; i++) {
            if (this.billValues[i] < 50) {
                var tipOne = this.billValues[i] * .2;
                allTips.push(tipOne);
                allBills.push(this.billValues[i] + tipOne);
                console.log(tipOne);
            } else if (this.billValues[i] > 20 && this.billValues[i] <= 200) {
                var tipTwo = this.billValues[i] * .15;
                allTips.push(tipTwo);
                allBills.push(this.billValues[i] + tipTwo);
                console.log(tipTwo);
            } else {
                var tipThree = this.billValues[i] * .1;
                allTips.push(tipThree);
                allBills.push(this.billValues[i] + tipThree);
                console.log(tipThree);
            }
        }
    }
}

billsJohn.calcTip();
console.log(allTips);
console.log(allBills);
*/

//JONAS SOLUTION

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            //Tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            //Add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
}