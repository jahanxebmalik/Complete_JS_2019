///////////////////////////////////////
// Lecture: Hoisting

//Function Hoisting:
//Works on Function declation
/*
calculateAge(1989);

function calculateAge(year) {
    console.log(2019 - year);
}

//Does not work on Function expression

//retirement(1989);
var retirement = function (year) {
    console.log(65 - (2019 - year));
}

// Variables 

console.log(age);
var age = 23;
console.log(age);


function foo() {
    var age = 65;
    console.log(age); //65
}

foo();
console.log(age); //23

*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d); //wont work because var b and c are in a different scope chain
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword