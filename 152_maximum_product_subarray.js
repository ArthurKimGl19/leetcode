var maxProduct = function(nums) {
    if (nums.length === 1){
        return nums[0];
    }

    let currentProduct = nums[0];
    let minProduct = nums[0];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++){
        let prevCurrentProd = currentProduct;
        currentProduct = Math.max(nums[i], currentProduct * nums[i], minProduct * nums[i]);
        minProduct = Math.min(nums[i], prevCurrentProd * nums[i], minProduct * nums[i]);
        maxProduct = Math.max(currentProduct, maxProduct);
    }
    return maxProduct;

    //Time Complexity O(n), Space Complexity O(1);
    //Had an issue initially by setting maxProduct to be -Infinity. Doing so will bypass the very first number.
    //Remedy is to also set the maxProduct to be the first number in the array so that it is included in the comparisons.
};