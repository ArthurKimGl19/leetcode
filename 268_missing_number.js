var missingNumber = function(nums) {
    nums = nums.sort((a,b) => a-b);

    let count = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === count){
            count++;
        } else {
            return count;
        }
    }
    return count;
};