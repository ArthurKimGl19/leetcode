var search = function(nums, target) {
    if (nums.length === 1) {
        if (nums[0] === target) return 0;
        else return -1;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right){
        let middle = Math.floor((left+right)/2);

        if (nums[middle] === target) return middle;

        if (target > nums[middle]){
            if (target <= nums[right]){
                left = middle + 1;
            } else {
                return -1;
            }
        } else {
            if (target >= nums[left]){
                right = middle - 1;
            } else {
                return -1;
            }
        }
    }
};