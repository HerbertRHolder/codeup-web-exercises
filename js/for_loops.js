function showMultiplicationTable(number){
    for(let i=0;i<=10;i++){

        console.log(number + " X " + i + " = " + (number*i));


    }
}// end of function

(showMultiplicationTable(7));


for (let i=1;i<=10;i++){
    let random = Math.floor((Math.random() * 200) + 20);
    if (random % 2 === 0){
        console.log(random + " is an even number");
    }else{
        console.log(random + " is an odd number")
    }

}// end of function


for (let i=1;i<10;i++){
    for (let j=1;j<=i;j++){
        console.log(i);
    }
}

for (let i=100;i>0;i-=5){
    console.log(i);
}

