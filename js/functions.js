// Use Strict
(function (){



})()
// anonymous functions
// let Increment = function(x) {
//     return x + 1;
// }1


 * > var originalPrice = 100;
 *
        let discountTotal = discountPercent * price;
        return price - discountTotal;
    }


// Make a function named identity(input) that returns the input exactly as provided.
    function isOdd(number){return (number % 2 !== 0)};

// Make a function named isFive(input)
// Make a function named isMultipleOfFive(input)
// Make a function named isMultipleOfThree(input)
    let isMultipleOfThree = (number) => number % 3 === 0;
// Make a function named isTrue(boolean)
let isFalse = (bool) => bool === false;
// Make a function named isTruthy(input), remember that values other than true will behave like true
    let isTruthy = (bool) => bool == true;
// Make a function named isVowel(letter)
    function isVowel(letter) {
            return true;
                case'e':
                    return true;
        case 'o':
                    return true;
        case 'A':
                    return true;
        case 'I':
                    return true;
                case 'O':
            return true;
                default:
}

    console.log("isVowel() input: I Expected: true:", isVowel('I'))
function isConsonant(letter){
        return !isVowel(letter);
console.log("isConsonant()")

function isCapital(string){
    if (typeof string === 'string'){
        return (string.toUpperCase() === string);
    }
}
console.log("isCapital()");

console.log("isLowerCase()");

    console.log("input: c ,Expected true: ",isLowerCase("c"));
        }
    }
    if (typeof string === 'string')
            for (let i = 0;i < string.length;i++){
                            if (string[i] === string[i].toLowerCase()){
   }//end for loop
                        return false;

console.log("CaT has lower Case",hasLowerCase("CaT"));



    }
        }
console.log("input a space :Expected true:",isSpace(' '));

            function isZero(number) {
console.log("isZero()");
                        console.log("input 0:Expected true:",isZero('0'))

    return (number != 0)
                        }
console.log("input 0:Expected false:",notZero('0'));

}

                console.log("lowerCase()");

    if (isNaN(number)) {
    }
                    number = parseInt(number);
                    if (typeof number === 'number') {

                                    }// end of double function
console.log("input 2;Expected 4:",double('2'));

                function triple(number){
        return 0;
                                    }
        return number*3;
                    }

                    console.log("triple(number)");
                    console.log("input 2;Expected 6:",triple('2'));


        return 0;
                        }
                            number = parseInt(number);
    }


console.log("input 2;Expected 8:",quadruple('2'));

    if (isNaN(number)) {
                                        console.log("This is not a number")
    number = parseInt(number);
                                    if (typeof number === 'number') {

                                                            }// end of double function
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
            return (integer === 2 || integer === '2')
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
            return tipPercentage * total;
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
         * > var discountPercent = .2; // 20%
         * > applyDiscount(originalPrice, discountPercent) // 80
         * > applyDiscount(45.99, 0.12) // 40.4712
         */

// TODO
        function applyDiscount(price,discountPercent) {
            if (typeof price === 'number' && typeof discountPercent === 'number'){
                price = parseFloat(price);
                discountPercent = parseFloat(discountPercent);
                return 0;
            }
            console.log(applyDiscount())
// Make a function named isOdd(number)
// Make a function named isEven(number)
            function isEven(number){return number % 2 === 0};
            function identity(input){return (isEven(input) || isOdd(input))}
            function isFive(input) {return (input === 5 || input == '5')}
// Make a function named addFive(input) that adds five to some input.
            function addFive(input){return (input + 5)}
            function isMultipleOfFive(input){return (input % 5 !== 0)}
// Make a function named isThree(input)
            function isThree(input){return input == 3;}
// Make a function named isMultipleOfThreeAndFive(input)
            let isMultipleOfThreeAndFive = (number) => number % 3 === 0 || number % 5 === 0;
// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
            let isMultipleOf = (target, n) => target % n === 0;
            let isTrue = (bool) => bool === true;
// Make a function named isFalse(boolean)
// Make a function named isFalsy(input), remember that values other than false behave like false
            let isFalsy = (bool) => bool == false;
            switch (letter) {
                case 'a':
                case 'i':
                    return true;
                case 'u':
                    return true;
                case 'E':
                    return true;
                    return true;
                case 'U':
                    return false;
            }

// Make a function named isConsonant(letter)
        }
        console.log("input d Expected: true",isConsonant("d"));
        console.log("input: C, Expected: true:",isCapital("C"));
        function isLowerCase(string){
            if (typeof string === 'string'){
                return (string === string.toLowerCase());

                function hasLowerCase(string){
                    return true;
                }//end of if statement
            }// end of hasLowerCase()
            console.log("hasLowerCase()")

            function isSpace(letter){
                if (typeof letter === 'string'){
                    return (letter === ' ');

                    console.log("isSpace()");
                    return (number == 0)
                }

                function notZero(number) {

                    console.log("notZero()");
                    function lowerCase(string){
                        return string.toLowerCase();
                        console.log("input CAT:Expected cat:",lowerCase('cat'));
                        function double(number){
                            console.log("This is not a number")
                            return 0;
                            return number*2;
                        }

                        console.log("double(number)");
                        if (isNaN(number)) {
                            console.log("This is not a number")
                            number = parseInt(number);
                            if (typeof number === 'number') {

                            }// end of double function

                            function quadruple(number){
                                if (isNaN(number)) {
                                    console.log("This is not a number")
                                    if (typeof number === 'number') {
                                        return number*4;
                                    }// end of double function
                                    console.log("quadruple(number)");

                                    function half(number){
                                        return 0;
                                    }
                                    return number/2;
                                }

console.log("half(number)");
console.log("input 2;Expected 1:",half('2'));

function subtract(a,b){
    if (isNaN(a) && isNaN(b)) {
        console.log("This is not a number")
        return 0;
    }
    a = parseInt(a);
    b = parseInt(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a-b;
    }
}// end of subtract
console.log("subtract()")
console.log("input 3,1:Expected 2 :",subtract(3,1));


function multiply(a,b){
    if (isNaN(a) && isNaN(b)) {
        console.log("This is not a number")
        return 0;
    }
    a = parseInt(a);
    b = parseInt(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a*b;
    }
}// end of multiply
console.log("multiply()")
console.log("input 3,2:Expected 6 :",multiply(3,2));


function divide(a,b){
    if (isNaN(a) && isNaN(b)) {
        console.log("This is not a number")
        return 0;
    }
    a = parseInt(a);
    b = parseInt(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a/b;
    }
}// end of divide
console.log("divide()")
console.log("input 3,2:Expected 1.5 :",divide(3,2));

function remainder(a,b){
    if (isNaN(a) && isNaN(b)) {
        console.log("This is not a number")
        return 0;
    }
    a = parseInt(a);
    b = parseInt(b);

    if (typeof a === 'number' && typeof b === 'number') {
        return a % b;
    }
}// end of remainder
console.log("remainder()")
console.log("input 6,4:Expected 2 :",remainder(6,4));

function modulo(c,d){
    if (isNaN(c) && isNaN(d)) {
        console.log("This is not a number")
        return 0;
    }
    c = parseInt(c);
    d = parseInt(d);

    if (typeof c === 'number' && typeof d === 'number') {
        return c % d;
    }
}// end of modulo
console.log("modulo()")
console.log("input 6,4:Expected 2 :",modulo(6,4));


function cube(n){
    if (isNaN(n)) {
        console.log("This is not a number")
        return 0;
    }
    n = parseInt(n);
    return n*n*n;

}

console.log("cube()")
console.log("input 2: Expected 8: ",cube(2))

function squareRoot(n) {
    if (isNaN(n)){
        console.log("This is not a number");
        return 0;
    }else {
        n = parseInt(n);
        n = Math.sqrt(n);
        return n;
    }
}

console.log("squareRoot()");
console.log("input 4: Expected 2: ",squareRoot(4));

function cubeRoot(n){
    if (isNaN(n)){
        console.log("This is not a number")
        return 0;
    }else {
        return Math.cbrt(n);
    }
}// end of function

console.log("cubeRoot()");
console.log("input 8:Expected 2: ",cubeRoot(8));


function invertSign(number){
    if (isNaN(number))
    {
        console.log("This is not a number");
    }else {
        number = parseInt(number);
        return number*(-1);
    }
}// end of function

console.log("invertSign()")
console.log("input -3:Expected 3: ",invertSign('-3'));

function degreesToRadians(number){
    if (isNaN(number)){
        console.log("This is not a number");
    }else {
        let pi = Math.PI;
        return number * (pi/180);
    }

}

console.log("degreesToRadians()");
console.log("input 60:Expected 1.0472 ~~: ",degreesToRadians(60));

function radiansToDegrees(number){
   if (isNaN(number)){
       console.log("This is not a number")
   }else {
       let pi = Math.PI;
       return number * (180/pi);
   }
}

console.log("radiansToDegrees(0");
console.log("input: 1.0471975511965976:Expected 60 ~~",radiansToDegrees(1.0471975511965976));

function isBlank(input){
    const newline = new RegExp('\\n*');
    const space = new RegExp('\\s*');
    const tab = new RegExp('\\t*');

    if (newline.test(input)){
        console.log("This has a newline");
        return (newline.test(input));
    }else if (space.test(input)){
        console.log("this has a space");
        return (space.test(input))
    }else if (tab.test(input)) {
        console.log("this is a tab");
        return (tab.test(input));
    }else {
        console.log("This has no tabs, newlines or spaces");
    }



}
let reg = " ";
// console.log(reg);
console.log("Need DeBug")
console.log("isBlank()");
console.log("input tab",isBlank(reg));

function trim(string){
    if (typeof string === 'string'){
        return string.trim();
    }else {
        console.log("This is not a string");
        return 0;
    }
}//end of function

console.log("trim()")
console.log("input:__cat__:Expected:cat:",trim("  cat  "))

function areEqual(input1,input2){
    return (input1 == input2);
}

console.log("areEqual()");
console.log("input:cat,cat:Expected true: ",areEqual("cat","cat"));

function areIdentical(input1,input2){
    return (input1 === input2);
}

console.log("areIdentical()");
console.log("input 2 ,\'2\':Expected false: ",areIdentical(2,'2'));

function not(input){
    return !input;
}

console.log("not()");
console.log("input false:Expected true: ",not(false));

function notNot(input){
    return !!input;
}

console.log("not()");
console.log("input false:Expected false: ",notNot(false));

function and(predicate1,predicate2){
    return (predicate1 && predicate2);
}

console.log("and()");
console.log("input true,false:Expected false",and(true,false));

function or(predicate1,predicate2){
    return (predicate1 || predicate2);
}

console.log("or()");
console.log("input true,false:Expected true",or(true,false));

function reverseString(string){
    string = string.split("");
    string.reverse();
    let joinString = string.join("");
    return joinString;
}

console.log("reverseString()");
console.log("input cat:Expected tac: ",reverseString("cat"));

function absoluteValue(number){
    if (isNaN(number)){
        console.log("This is not a number");
        return 0;
    }else {
        number = parseInt(number);
        return Math.abs(number);

    }
}// end function

console.log("absoluteValue()");
console.log("input -3:Expected 3: ",absoluteValue('-3'));

function rollDice(sides){
    let rand = Math.floor((Math.random() * sides) + 1);
    return rand;
}

console.log("rollDice()");
console.log("input 8:Expected random number 1-8",rollDice(8));

// Simple Functions
function returnTwo(){
    return 2;
}

console.log("returnTwo()");
console.log(returnTwo());

function sayHowdy(){
    console.log("Howdy!");
}


function returnName(){
    return "Herb!";
}

console.log("returnName()");
console.log(returnName());

function addThree(number){
    return number+3;
}

console.log("addThree()");
console.log(addThree(5));

function sayString(str){
    return str;
}

console.log("sayString()");
console.log(sayString("codeup"));

function identity(input){
    return input;
}

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log("getRandomNumber()")
console.log(getRandomNumber(1,6));

function first(input){
    return input[0];
}

console.log("first()");
console.log(first("herb"));

function last(input){
    return input[input.length-1];
}

console.log("last()");
console.log(rest("herb"));

function rest(input){
    return input.substring(1);
}

console.log("rest()");
console.log(rest("herb"));

function reverse(input){
    input.reverse();
}

function isNumeric(input){
    input = parseFloat(input);
    return typeof input === 'number';
}

function count(input){
    return input.length;
}

function add(a, b ){
    return a+b;
}
function subtract(a, b ){
    return a-b;
}
function multiply(a, b ){
    return a*b;
}

function divide(a, b ){
    return a/b;
}

function remainder(a, b){
    return a%b;
}

function square(a){
    return a*a;
}
function sumOfSquares(a, b){
    return add(square(a),square(b));
}

function doMath(op, a, b){
    if (op === '+'){return add(a,b);}
    if (op === '-'){return subtract(a,b);}
    if (op === '*'){return multiply(a,b);}
    if (op === '/'){return divide(a,b);}

    return 0;

}

console.log("doMath()")
console.log("input *,1,3",doMath("*",1,3));
// Even more function bonuses
// 1
function howManySpaces(str){
    str = str.split('');
    let i = 0;
    let j = (str.length);
    let count1 = 0;
    let count2 = 0;

        while(str[i++] === ' '){
            count1++;
        }
        while (str[--j] === ' '){
            count2++;
        }

    return count1 + count2;
}
console.log("howManySpaces()")
console.log("--hello------: Expected 10: ",howManySpaces("  hello        "));

// 2

function replace1(str1,str2){
    if (str1.includes(str2)){
        return str1.replace(str2,"");
    }
    return str1;
}//end of function


console.log("replace1()",replace1('cati',"at"));

// 3
function hasA(str){
    return (str.endsWith('a'));
}

console.log("hasA()");
console.log("input crayola",hasA("crayola"))

// 4
function countFirstSpaces(str){
    return str.match(/\s+[a-z]/g || [])[0].length-1;
}

console.log("countFirstSpaces()");
console.log("input ---cat---:Expected 3: ",countFirstSpaces("   cat   "));

// 5
function returnTrueMessage(){
    return "Hey, it's true!";
}

// 5
function returnFalseMessage(){
    return "Hey, it's false!";
}

console.log(returnFalseMessage())

// 5
function returnMessage(){
    return returnTrueMessage();
}
// 6
function willLoginUser(username,password,userAge,isAdmin){
    if (typeof username === 'string' && typeof password === 'string'){
        if (typeof isAdmin === "boolean" && isAdmin === true){
            return username !== password;
        }else if (parseInt(userAge) >= 18){
            return username !== password;
        }else {
            return false;
        }
    }

}

console.log("willLoginUser()");
console.log("herb,123,18,false",willLoginUser("herb","123", 18,false));
let i = 0;
while(i < 10) {
    console.log(i);

    i++;
}