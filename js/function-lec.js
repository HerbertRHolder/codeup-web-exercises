// Use Strict
(function ())

// anonymous functions
// let Increment = function(x) {
//     return x + 1;
// }1


/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    alert("Hello " + name);
    return name;
}

let user = prompt("What is your name?")

sayHello(user);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

let helloMessage = sayHello('Herb');
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


let myName = "herb";
sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

console.log("isTwo()")
function isTwo(integer){
    return (integer == 2 || integer == '2')
}
console.log(isTwo(random));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// calculateTip converts an integer to a decimal by dividing the integer by 100 to get the percentage
console.log("calculateTip()")
function calculateTip(tipPercentage, total ) {
    tipPercentage = tipPercentage/100;
    let tip = tipPercentage * total;
    return tip;
}
console.log(calculateTip(5,10));
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// TODO

    let billTotal = prompt("What is your bill total?");
    let tipPercent = prompt("What percentage of the total would you like to tip?");
    if (tipPercent.endsWith('%'))
    tipPercent = tipPercent.replace('%','')
    // console.log("call calc tip",calculateTip(tip, billTotal));
        let tipConversion = parseInt(calculateTip(tipPercent,billTotal).toFixed(2))
        let billConversion = parseInt(billTotal);
    alert("Your tip amount is $" + tipConversion + " thank you!");
    alert('Here is your total bill: $' + (billConversion + tipConversion).toFixed(2) );
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

// TODO
function applyDiscount(price,discountPercent) {
    let discountTotal = discountPercent * price;
    let discount = price - discountTotal;
    return price + discount;
}



// Make a function named isOdd(number)
// Make a function named isEven(number)
// Make a function named identity(input) that returns the input exactly as provided.
function isOdd(number){return (number % 2 !== 0)};
function isEven(number){return number % 2 === 0};
function identity(input){return (isEven(input) || isOdd(input))}

// Make a function named isFive(input)
function isFive(input) {return (input === 5 || input == '5')}
// Make a function named addFive(input) that adds five to some input.
function addFive(input){return (input + 5)}
// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){return (input % 5 !== 0)}
// Make a function named isThree(input)
function isThree(input){return input == 3;}
// Make a function named isMultipleOfThree(input)
let isMultipleOfThree = (number) => number % 3 === 0;
// Make a function named isMultipleOfThreeAndFive(input)
let isMultipleOfThreeAndFive = (number) => number % 3 === 0 || number % 5 === 0;
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
let isMultipleOf = (target, n) => target % n === 0;
// Make a function named isTrue(boolean)
let isTrue = (bool) => bool === true;
// Make a function named isFalse(boolean)
let isFalse = (bool) => bool === false;
// Make a function named isTruthy(input), remember that values other than true will behave like true
let isTruthy = (bool) => bool == true;
// Make a function named isFalsy(input), remember that values other than false behave like false
let isFalsy = (bool) => bool == false;
// Make a function named isVowel(letter)
function isVowel(letter) {
    switch (letter) {
        case 'a':
            return true;
        case'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        case 'A':
            return true;
        case 'E':
            return true;
        case 'I':
            return true;
        case 'O':
            return true;
        case 'U':
            return true;
        default:
            return false;
    }
}

console.log("isVowel() input: I Expected: true:", isVowel('I'))

// Make a function named isConsonant(letter)
function isConsonant(letter){
    return !isVowel(letter);
}
console.log("input d Expected: true",isConsonant("d"))










