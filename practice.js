const x = 10; // const means the variable is immutable
let y = 10; // let allows for the variable to be changed
Number() //function that acts as pythons int() function, chnages a string to an int
const array_example = ['bruh', 10, 30]; //arrays (lists) in js can have any datatype

const nested_obj = { // nested object, to get target you type 'nested_obj.layerone.layerTwo.layerThree.Target'
    layerone: {
        layerTwo: {
            layerThree: {
                Target: 10
            }
        }
    }
}
const my_bool = true;

//triple equal signs '===' means they have the same type and value while two equals signs '==' converts it inherently
// && denotes the and statement, multiple statements must be true to evaluate as true
// || denotes an or statement 
// ! denotes the opposite of the boolean expression output

if (20 == 20) {
    unassigned_var = 20;
} else {
    unassigned_var = 30;
}

const result = (() => { //instantly executable function
    return 20;
})();

const random_num = //blah blah blah 

switch (random_num) {
    case 'orange':
    //do something
    break;
    case 'apple':
    //do something
    break;
    default:
        //blah blah blah
}
// switch cases are a good alternative to if and else if statements that go on for too long

//loops below!!
for (let i = 0; i < 100; i++ ) {

}

const array1 = [1,2,3,4,'bruh', 'blud'];

for (let i = 0; i< array1.length; i++) {
    if (typof array1[i] === 'string') {
            console.log(array1[i]);
    }
}

// FUNCTIONS BELOW
function myfunction () {
    //do something;
}

myfunction(); //calling the function

//anonomous function example

const anotherFunction = function () {
    console.log("Sup Bitch");
}

//arrow function example (industry standard)

const arrowFunction = () => {
    console.log("This is an arrow function");
}

//return function 

const returnFunction = () => {
    return 20;
}

//callback function !!IMPORTANT!!

function callBack(someNumber) {
    return someNumber * 2;
}

function myFunction(randomNumber, shouldCall, callback) {
    let result = randomNumber;

    if (shouldCall == true) { 
        result = callback(randomNumber);
    }
    return result;
}

//calling it w/ a seperate function

myFunction(20, true, callBack); //returns 40

// to make it easier to type you can also condense it

myFunction(20, true, function(num) {
    return num * 2
})

//there is a difference between a 'string' and a String('string) because the second is an object (first is a primitive)

//Dates! 

const date = new Date();

//regular expressions are typically used to pattern match (ex: checking for a valid email)

const EmailValidator = new RegExp('^.+@.+\..+$');

// the '^' symbol indacates wanting to start from the beginning of the line
// the period followed by the plus indicates wanting to match every character one or more times
// the @ symbol is self explanitory
// the period plus is doing the same but for after the @ in user input
// the backslash indicates the end of that section followed by a period means it's looking for one period to match
// the .+ is looking to match the domain (.org, .com, etc)
// the dollar sign is the end of the line

const UserInput = 'emailbruh@pee';

const isValid = EmailValidator.test(UserInput);

// a regular expression like /bruh/.test() also works 

// you can also do ranges in brackets like /[a-z A-Z]/

//quantifiers calculate the amount of matches a + indicates wanting to match one or more
//a ? is wanting to match 0 or 1
//you can pass in a specific amount of quantifiers with /[a-z]{5}/ this matches 5 of all characters that are lowercase

//array methods !!Important!!

//push() (adds specified elements into the array) pop() (removes final item returns it) 
//unshift() (adds one or more elements to an array and returns length)

const arr = [1,2,3,4,5,6];

arr.splice(3, 1, 3.5); //the first number is the index you wish to alter, the amount of elements you wish to delete and what you wish to replace it with

//find index within an embedded list

const myList = [
    {
        firstName: 'Quinn',
        lastName: 'Olney'
    },
    {
        firstName: 'Matt',
        lastName: 'Doss'
    }
];

myList.findIndex((arrItem) => {
    return myList.lasName !== 'Olney'; //good method to use in more complex lists, requires a callback function
})

// try catch is an effective method to discover bugs in your code and not have a terrible error

try {
    //calculate something
} catch(error) {
    console.log(error.message);
}

//the window in your browser is a fundemental object in javascript, you can program it to alert or do other things

window.scrollBy({
    top: window.innerHeight,
    left: 0,
    behavior: 'smooth' //what this does is scrolls down to the innerheight or the bottom of you visible screen NOT the bottom of the page

});

//the command innerHeight gives the pixel height of your respective display

//the localStorage object stores data in your browser !IMPORTANT!