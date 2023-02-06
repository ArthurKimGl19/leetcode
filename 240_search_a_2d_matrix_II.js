var searchMatrix = function(matrix, target) {
    //brute force
    // for (let i = 0; i < matrix.length; i++){
    //     for (let j = 0; j < matrix[i].length; j++){
    //         if (matrix[i][j] === target){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    function binarySearch(row, target){
        let left = 0;
        let right = row.length-1;

        while (left <= right){
            let middle = Math.floor((left+right)/2);
            if (target === row[middle]) return true;

            if (target < row[middle]){
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }
        return false;
    }

    for (let i = 0; i < matrix.length; i++){
        if (matrix[i].length > 0){
            if (binarySearch(matrix[i], target)) return true;
        }
    }
    return false;
    //notes

    //brute force O(n^2), used binary search for O(nlogn). will look at search and space reduction algo
};