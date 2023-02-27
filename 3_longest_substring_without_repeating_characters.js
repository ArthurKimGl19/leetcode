var lengthOfLongestSubstring = function(s) {
    // if (s.length === 0){
    //     return 0;
    // } else if (s.length === 1){
    //     return 1;
    // }
    //
    // let storage = new Set();
    //
    // let left = 0;
    // let right = left+1;
    // storage.add(s[left]);
    // let currentCount = 1;
    // let maxCount = 0;
    //
    // while (left < s.length - 1){
    //     if (!storage.has(s[right]) && right <= s.length - 1){
    //         storage.add(s[right]);
    //         currentCount++;
    //         right++;
    //     } else {
    //         maxCount = Math.max(currentCount, maxCount);
    //         currentCount = 0;
    //         left++;
    //         storage = new Set();
    //         storage.add(s[left]);
    //         currentCount++;
    //         right = left + 1;
    //     }
    // }
    // return maxCount
    // //Time Complexity O(n), Space Complexity O(n);
    let maxCount = 0;
    let start = 0;
    const set = new Set();

    for (let end = 0; end < s.length; end++){
        while (set.has(s[end])){
            set.delete(s[start]);
            start++;
        }
        set.add(s[end]);
        maxCount = Math.max(maxCount, end - start + 1);
    }
    return maxCount;
    //Time Complexity O(n), Space Complexity O(n);
};