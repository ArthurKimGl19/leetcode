var lengthOfLongestSubstring = function(s) {
    var lengthOfLongestSubstring = function(s) {
        if (s.length === 0){
            return 0;
        } else if (s.length === 1){
            return 1;
        }

        let front = 0;
        let currentCount = 0;
        let maxCount = 0;
        const set = new Set();

        for (let i = 0; i < s.length; i++){
            if (!set.has(s[i])){
                set.add(s[i]);
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            } else {
                while (set.has(s[i])){
                    set.delete(s[front]);
                    front++;
                    currentCount--;
                }
                set.add(s[i]);
                currentCount++;
                maxCount = Math.max(maxCount, currentCount);
            }
        }
        return maxCount;
    };
    //Time Complexity O(n), Space Complexity O(n);
};