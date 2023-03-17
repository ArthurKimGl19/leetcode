/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right){
        const middle = Math.floor((left+right)/2);

        if (nums[middle] < nums[right]){
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return nums[left];
    //Time Complexity O(log n), Space Complexity O(1);
};