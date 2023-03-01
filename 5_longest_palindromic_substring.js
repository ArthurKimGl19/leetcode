var longestPalindrome = function(s) {
    if (s.length === 1){
        return s;
    }

    let left = 0;
    let right = s.length - 1;
    let output = "";
    while (left <= s.length - 1){
        const currentString = s.substring(left, right+1);
        const validPalindrome = palindromeChecker(currentString);
        if (validPalindrome && currentString.length > output.length){
            output = currentString;
        }
        if (right === left || currentString.length < output.length){
            left++;
            right = s.length - 1;
        } else {
            right--;
        }
    }
    return output;
};

var palindromeChecker = function(s){
    if (s.length === 1){
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while (left <= right){
        if (s[left] !== s[right]){
            return false
        }
        left++;
        right--;
    }
    return true;
}
//Brute force implementation with slight optimization by skipping substrings that are smaller than current output;
//Time Complexity O(n^3)? Space Complexity O(1)