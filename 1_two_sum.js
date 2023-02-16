var twoSum = function(nums, target) {
    if (nums.length === 2){
        return [0,1];
    }
    const storage = {};
    storage[nums[0]] = 0;

    for (let i = 1; i < nums.length; i++){
        const difference = target - nums[i];
        if (storage[difference] !== undefined){
            return [storage[difference], i];
        } else {
            storage[nums[i]] = i;
        }
    }
    //Time complexity - O(n), Space complexity - O(1);
};