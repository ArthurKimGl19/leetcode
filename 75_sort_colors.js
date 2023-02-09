var sortColors = function(nums) {
    // if (nums.length < 2) return nums;
    //
    // let left = 0;
    // let right = 1;
    // let max = nums.length;
    //
    // while (right < max){
    //     if (nums[left] > nums[right]){
    //         let leftRef = nums[left];
    //         nums[left] = nums[right];
    //         nums[right] = leftRef;
    //     }
    //     if (right === max - 1){
    //         left = 0;
    //         right = 1;
    //         max--;
    //     } else {
    //         left++;
    //         right++;
    //     }
    // }
    // return nums;
    //Used bubble sort to solve: Time Complexity O(n^2) Space O(n);

    //use 3 pointers for one pass and constant space
    if (nums.length < 2) return nums;

    let left = 0;
    let right = nums.length - 1;
    let current = 0;

    while (current <= right){
        if (nums[current] === 0){
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 2){
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        } else {
            current++;
        }
    }
    return nums;
    //Time complexity O(n), space O(1)
};