var productExceptSelf = function(nums) {
    const storage = [];

    let currentProduct = 1;
    storage.push(currentProduct);
    for (let i = 0; i < nums.length - 1; i++){
        currentProduct = currentProduct * nums[i];
        storage.push(currentProduct);
    }
    currentProduct = 1;
    for (let j = nums.length - 1; j >= 0; j--){
        storage[j] = storage[j] * currentProduct;
        currentProduct = currentProduct * nums[j];
    }
    return storage;
    //Time complexity - O(n), Space Complexity - O(n);
};