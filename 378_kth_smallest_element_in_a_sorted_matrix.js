var kthSmallest = function(matrix, k) {
    // let storage = [];

    // for (let i = 0; i < matrix.length; i++){
    //     storage = storage.concat(matrix[i]);
    // }
    // storage.sort((a,b) => a-b);
    // return storage[k-1];
    //brute force and creates brand new array each time storage concat is invoked

    // const storage = matrix.flat();
    // storage.sort((a,b) => a-b);
    // return storage[k-1];
    //better brute force, flat is still O(n^2) but memory is O(n)

    //change to string and remove [], add [] to front and back
    let newArray = JSON.stringify(matrix).replace(/[\[\]']+/g, '');
    newArray = "[" + newArray + "]";
    newArray = JSON.parse(newArray);
    newArray.sort((a,b) => a-b);
    return newArray[k-1];
    //Time complexity O(n logn) with native sort, space is O(n);
    //Optimal solution is using binary search.
};