var maxArea = function(height) {
    if (height.length < 2){
        return 0;
    }

    let maxContainer = 0;
    let left = 0;
    let right = height.length - 1;
    while (left <= right){
        let containerLength = right - left;
        let containerHeight = Math.min(height[left], height[right]);
        maxContainer = Math.max(containerHeight * containerLength, maxContainer);
        if (height[left] <= height[right]){
            left++;
        } else {
            right--;
        }
    }
    return maxContainer;

    //Time Complexity O(n), Space Complexity O(1);
};