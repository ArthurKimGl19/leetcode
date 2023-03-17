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
        //Time Complexity O(n), Space Complexity O(n);

    };
    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(s) {
        if (s.length === 0){
            return 0;
        } else if (s.length === 1){
            return 1;
        }

        let pointer = 0;
        let max = 0;
        const storage = {};

        for (let i = 0; i < s.length; i++){
            //if not in storage
            //add and set value to be i + 1
            //set max to be i - p + 1 or max whatever is larger
            //else if in storage
            //set pointer to be value at s[i] in storage or pointer whatever is greater
            //set max to be i - p + 1 or max whatever is larger
            //update value of s[i] in storage to be i + 1
            if (storage[s[i]] === undefined){
                storage[s[i]] = i + 1;
                max = Math.max(max, i - pointer + 1);
            } else {
                pointer = Math.max(storage[s[i]], pointer);
                max = Math.max(max, i - pointer + 1);
                storage[s[i]] = i + 1;
            }
        }
        return max;
        //return max
        //Different Implementation : Time Complexity O(n), Space Complexity O(n);
    };