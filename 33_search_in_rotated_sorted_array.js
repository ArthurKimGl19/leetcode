var search = function(nums, target) {
    if (nums.length === 1){
        if (nums[0] === target){
            return 0;
        } else {
            return -1;
        }
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        let middle = Math.floor((left+right)/2);
        if (nums[middle] === target){
            return middle;
        }

        if (nums[left] <= nums[middle]){
            if (target < nums[middle] && target >= nums[left]){
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (target > nums[middle] && target <= nums[right]){
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;
    //Time Complexity O(log n), Space Complexity O(1)
    //Need to initially set left num <= middle because there are scenarios where a number is left and middle
};