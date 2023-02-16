var maxSubArray = function(nums) {
    let currentSum = maxSum = nums[0];

    if (nums.length === 1){
        return maxSum;
    }

    for (let i = 1; i < nums.length; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;

    //Time Complexity O(n), Space Complexity O(1);
};