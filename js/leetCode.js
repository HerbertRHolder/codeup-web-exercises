

// function loop(number){
//     if (number === 0) {
//         return number;
//     }
//     console.log(number);
//     loop(number - 1);
// }
//
// loop(7);
let increasingTriplet = function(nums) {

// BRUTE FORCE VERSION
    for (let i = 0; i < nums.length; i++){
        console.log(i)
        for (let j = i + 1; j < nums.length; j++){
            console.log("i: ",i)
            for (let k = j + 1; k < nums.length; k++){

                // console.log("j: ",j)
                // console.log("k: ",k)
                // console.log("i j k",nums[i] > nums[j] > nums[k]);
                console.log("i:" + nums[i],"j:" + nums[j],"k:" + nums[k])
                // console.log((nums[i]) < (nums[j]) < (nums[k]))

                console.log(nums);

                if ((nums[i] < nums[j]) && (nums[j] < nums[k])) {
                    return true;
                }
            }

        }
    }
return false;
}// end of function


let nums = [5,4,3,2,1];
// console.log(increasingTriplet(nums));


function tripletGreater(nums){
    for (let i = 0; i < nums.length;i++){
        if ((nums[i] < nums[i+1]) && (nums[i+1] < nums[i+3])) {
            return true;
        } //end if
    }// end of for
    return false;
}// end of function
console.log(nums);
console.log("tripletGreater",tripletGreater(nums));
