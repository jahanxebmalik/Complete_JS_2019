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