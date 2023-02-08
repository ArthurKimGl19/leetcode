var peakIndexInMountainArray = function(arr) {
    // let largestNumber = -Infinity;
    // let index = 0;
    // for (let i = 0; i < arr.length; i++){
    //     if (arr[i] > largestNumber){
    //         largestNumber = arr[i];
    //         index = i;
    //     }
    // }
    // return index;

    //Time complexity O(n), space O(1)

    let left = 0;
    let right = arr.length - 1;
    let middleNumber = -Infinity;
    let middleIndex = 0;
    while (left < right){
        let middle = Math.floor((left+right)/2);
        if (middleNumber < arr[middle]){
            middleNumber = arr[middle];
            middleIndex = middle;
        }
        if (arr[middle] > arr[middle+1]){
            right = middle;
        } else {
            left = middle + 1;
        }
    }
    return middleIndex;
    //Binary search approach. Need to compare to the right of middle to determine if going left or right
    //Time Complexity O(log n), space O(1)
};