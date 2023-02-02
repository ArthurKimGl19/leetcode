var sortArrayByParity = function(nums) {
    //use two pointers with one while loop
    let left = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
            let refNum = nums[i];
            nums[i] = nums[left];
            nums[left] = refNum;
            left++;
        }
    }
    return nums;
};