var isPalindrome = function(s) {
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

    if (s.length < 2){
        return true;
    }

    let left = 0;
    let right = s.length - 1;
    while (left <= right){
        if (s[left] !== s[right]){
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
    //Time Complexity O(n), Space Complexity O(1)
};