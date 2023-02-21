var containsDuplicate = function(nums) {
    if (nums.length === 1){
        return false;
    }
    const set = new Set();
    for (let i = 0; i < nums.length; i++){
        if (set.has(nums[i])){
            return true;
        } else {
            set.add(nums[i]);
        }
    }
    return false;

    //Time complexity O(n), Space Complexity O(n);
};