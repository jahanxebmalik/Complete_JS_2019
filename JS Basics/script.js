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