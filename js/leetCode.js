

// function loop(number){
//     if (number === 0) {
//         return number;
//     }
//     console.log(number);
//     loop(number - 1);
// }
//
// loop(7);
let increasingTriplet = function(nums) {;


    for (let i=0;i<nums.length;i++){

        for (let j=i+1;j<nums.length;j++){
            console.log("i: ",i)
            for (let k=j+1;k<nums.length; k++){

                console.log("j: ",j)
                console.log("k: ",k)
                console.log("i j k",nums[i] > nums[j] > nums[k]);


                console.log(nums);

                return (nums[i] < nums[j] < nums[k]);
            }

        }
    }
return false;
}// end of function


let nums = [5,4,3,2,1];
console.log(increasingTriplet(nums));