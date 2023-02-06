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

    //binary search O(nlogn)
    // function binarySearch(row, target){
    //     let left = 0;
    //     let right = row.length-1;
    //
    //     while (left <= right){
    //         let middle = Math.floor((left+right)/2);
    //         if (target === row[middle]) return true;
    //
    //         if (target < row[middle]){
    //             right = middle - 1;
    //         } else {
    //             left = middle + 1;
    //         }
    //     }
    //     return false;
    // }
    //
    // for (let i = 0; i < matrix.length; i++){
    //     if (matrix[i].length > 0){
    //         if (binarySearch(matrix[i], target)) return true;
    //     }
    // }
    // return false;
    //notes

    //search and space reduction algo O(m+n) -> m is row and n is length of columns - beats 63% mem
    let row = matrix.length-1;
    let column = 0;
    while (row < matrix.length && row >= 0 && column < matrix[0].length && column >= 0){
        if (matrix[row][column] === target) return true;
        if (matrix[row][column] > target) row--;
        else column++;
    }
    return false;
};