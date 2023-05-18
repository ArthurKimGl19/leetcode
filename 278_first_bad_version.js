/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1){
            return 1;
        }

        let left = 1;
        let right = n;

        while (left<= right){
            const middle = Math.floor((left+right)/2);

            if (isBadVersion(middle) || isBadVersion(left)){
                right = middle;
            } else if (isBadVersion(right)){
                left = middle+1;
            }
            if (left === right){
                right--;
            }
        }
        return left;
    };
};

//Time Complexity O(log n), Space Complexity O(1);