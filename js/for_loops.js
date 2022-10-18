// function showMultiplicationTable(number){
//     for(let i=0;i<=10;i++){
//
//         console.log(number + " X " + i + " = " + (number*i));
//
//
//     }
// }// end of function
//
// (showMultiplicationTable(7));


for (let i=1;i<=10;i++){
    let random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0){
        console.log(random + " is an even number");
    }else{
        console.log(random + " is an odd number")
    }

}// end of function
let i=0;
while (i<10){
    console.log( `${i}`.repeat(i) );
    }

// function repeatString(str,i){
//     if (i>9){return 0;}
//     console.log(i);
//     return repeatString(str,i++);
// }
//
// console.log(repeatString("", 0));


//
// for (let i=100;i>0;i-=5){
//     console.log(i);
// }


// for (let i=1;i<9;i++){
//     console.log(i.toString().repeat(i));
// }
