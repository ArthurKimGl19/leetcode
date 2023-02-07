var kthSmallest = function(matrix, k) {
    const storage = [];

    for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            storage.push(matrix[i][j]);
        }
    }
    storage.sort((a, b) => a-b);
    return storage[k-1];
    //Time complexity O(n) space complexity (On^2)
    //There is a binary search way to keep mem complexity to O(1)
};