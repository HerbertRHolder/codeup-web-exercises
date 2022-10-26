// use strict
// (function(){
function isNum(x){
    return !isNaN(parseFloat(`${x}`));
}


    function average(arr) {
        let i = 0;
        let sum=0;
        // if (arr instanceof Array) {
            while (i < arr.length) {
               if(isNum(arr[i])){
                   sum += parseFloat(arr[i]);
               }else{
                   return false;
               }
                i++;
            }
        return sum / arr.length;


        // }

        // return false;
    }// func


    console.log(average([1, 2, 3, 4, 5]));



// })();

