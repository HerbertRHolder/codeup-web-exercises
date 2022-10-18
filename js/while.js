// use strict
(function(){





    let i =1;
    while(i<=16){
        console.log(Math.pow(2,i));
        i++;
    }
    let allCones = Math.floor((Math.random() * 50) + 50);
    console.log("cones today: ",allCones);
    let tmp = 0;
    do {
        let cones = Math.floor((Math.random() * 5) + 1);
        if (allCones < cones){
            console.log("I cannot sell you " + cones + "i only have " + allCones + " sorry :(");
            break;
        }else {
            console.log("Cones left: " + allCones, "Cones just sold: " + cones);
            allCones -= cones;
        }
        console.log(cones + "Cones Sold");
        tmp = cones;
    }while (allCones >= tmp)
    console.log("Yay! I sold them all!");
    console.log("All cones: ", allCones);

})()