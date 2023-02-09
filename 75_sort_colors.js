var sortColors = function(nums) {
    if (nums.length < 2) return nums;

    let left = 0;
    let right = 1;
    let max = nums.length;

    while (right < max){
        if (nums[left] > nums[right]){
            let leftRef = nums[left];
            nums[left] = nums[right];
            nums[right] = leftRef;
        }
        if (right === max - 1){
            left = 0;
            right = 1;
            max--;
        } else {
            left++;
            right++;
        }
    }
    return nums;
    //Used bubble sort to solve: Time Complexity O(n^2) Space O(n);
};