// use strict

// let userChoice = parseInt(prompt("Pick a number between 1 and 50"));
//
// while(isNaN(userChoice)){
//     userChoice = prompt("PLease enter a real and whole number");
// }

// for (let i=1;i<=50;i++){
//
//     if (i % 2 === 0){
//       continue;
//     }else if (i === userChoice){
//         console.log("Yikes! Skipping number: " + userChoice);
//         continue;
//     }
//     console.log("Here is an odd number: " + i);
//
//
// }


let nums= [1, 2, 3, 4, 5];

for (let i=0;i<=nums.length;i++){
    let sum = i;
    sum = i + nums[i];
    console.log(sum);
}