"use strict";

(function(){



    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *
     *
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */
    function analyzeColorV1(color){
        if (color === 'red'){
            return "red is the color of strawberries"
        }else if (color === "blue"){
            return "blue is the color of the ocean"
        }else if (color === "green"){
            return "green is the color of the grass"
        }else {
            return "I have not not heard of this color";
        }//end of if chain

    }// end of the function

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */
console.log("Analyze Color", analyzeColorV1(randomColor));
    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */
    function analyzeColor(color){
        switch(color){
            case "red":
                return ("Red is the color of strawberries");
            case "orange":
                return ("Orange is the color of the fruit!");

                break;
            case "yellow":
                return ("yellow is the color of a lemon!");
            case "green":
                return ("green is the color of the grass");;
            case "blue":
                return ("Blue is the color of the ocean");
            case "indigo":
                return ("indigo is my favorite color");
            case "violet":
                return ("violet is the color of a lotus");
                break;
            default:
                return ("I am not sure what color that is.");
        }
        return color;
    }


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    let userColor = prompt("What is your favorite color?");
    alert(analyzeColor(userColor));
    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */
    function calculateTotal(luckyNumber,totalAmount){
        if (typeof luckyNumber !== 'number' || typeof totalAmount !== 'number'){
            console.log("This is not a number");
            return 0;
        }else {

            luckyNumber = parseInt(luckyNumber);
            let luckyOne = .10;
            let luckyTwo = .25;
            let luckyThree = .35;
            let luckyFour = .50;

            switch(luckyNumber){
                case 0:
                    console.log("Picked up a 0. Sorry you will not receive a discount");
                    return totalAmount;
                case 1:
                    alert("Picked up a 1. Its your lucky day you will earn " + (luckyOne * 100) + "%");
                    console.log("Your discount applied is $"+(totalAmount - (luckyOne*totalAmount)))
                    return totalAmount - (luckyOne*totalAmount);
                case 2:
                    alert("Picked up a 2. Its your lucky day you will earn " + (luckyTwo * 100) + "%");
                    console.log("Your discount applied is $"+(totalAmount - (luckyTwo*totalAmount)))
                    return totalAmount - (luckyTwo*totalAmount);
                case 3:
                    alert("Picked up a 3. Its your lucky day you will earn " + (luckyThree * 100) + "%");
                    console.log("Your discount applied is $"+(totalAmount - (luckyThree*totalAmount)))
                    return totalAmount - (luckyThree*totalAmount);
                case 4:
                    alert("Picked up a 4. Its your lucky day you will earn " + (luckyFour * 100) + "%");
                    console.log("Your discount applied is $"+(totalAmount - (luckyFour*totalAmount)))
                    return totalAmount - (luckyFour*totalAmount);
                case 5:
                    alert("Picked up a 5. Its your lucky day you will everything for free");
                    return 0;
                default:
                    alert("Looks like that's not a number or not in the range of numbers");

            }// end of switch

        }// end of else

    }// end of function


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);
    let userBill = parseFloat(prompt("what is the total bill"));
    alert("ln172 This is your total bill" + " $" + calculateTotal(luckyNumber,userBill));

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     *
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */
    function enteredNumber() {
        confirm("Would you like to enter a number?");
        let userNumber = prompt("Please enter a number?");
        userNumber = parseInt(userNumber);

        // console.log("type of",typeof userNumber);
        if (typeof userNumber === 'number'){

            (userNumber % 2 === 0) ? alert( userNumber + " this number is Even") : alert(userNumber + " This number is Odd");
            alert("This is the number added by 100: "+(userNumber + 100));
            (userNumber < 0) ? console.log("This number is negative") : alert("This number is positive");
        }// end of if
    return 0;
    }// end of function

    console.log(enteredNumber());






})()

/* ########################################################################## */

