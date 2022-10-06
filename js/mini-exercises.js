
// ================ !! Mini-exercises !!

// Write a function, returnFive, that returns the number five. No inputs should be defined.

function returnFive(){
    return 5;
}
console.log(returnFive());

// Write a function, isFive, that takes in an input and returns
// the boolean value true if the passed argument is the number 5 or the string "5".
// Return false otherwise.

function isFive(integer){
    return (integer == 5 || integer == '5');
}
console.log("isFive()");
console.log(isFive(5));



// Write a function, isShortWord, that takes in a string and returns the boolean value
// true if the passed argument is shorter than 5 characters. Return false otherwise.
function isShortWord(word){
    if (typeof word === 'string'){
        return (word.length < 5);
    }else {
        console.log("This is not a String")
    }
}
console.log("isShortWord()")
console.log(isShortWord("1234"));


// Write a function, isSameLength, that takes in two string inputs
// and returns the boolean value true if the passed
// arguments are the same length. Return false otherwise.


function isSameLength(word1,word2){
    if (typeof word1 === 'string' && typeof word2 === 'string'){
        return (word1.length === word2.length);
    }else {
        console.log("error: Two Strings were not input");
    }

}
console.log("isSameLength()")
console.log(isSameLength('cat',"dog"));


