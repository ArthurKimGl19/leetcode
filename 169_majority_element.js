/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1;
    let majorityElement = nums[0];

    for (let i = 1; i < nums.length; i++){
        if (count === 0 && nums[i] !== majorityElement){
            majorityElement = nums[i];
            count++;
        } else {
            if (nums[i] !== majorityElement){
                count--;
            } else {
                count++;
            }
        }
    }
    return majorityElement;
    //Time Complexity O(n), Space O(1)
};