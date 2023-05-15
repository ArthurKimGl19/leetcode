/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2){
        return true;
    }
    const sorted = [...intervals].sort((a,b) => a[0]-b[0]);
    let currentEnd = sorted[0][1];
    for (let i = 1; i < sorted.length; i++){
        if (currentEnd > sorted[i][0]) return false;
        if (currentEnd < sorted[i][1]) currentEnd = sorted[i][1];
    }
    return true;
};
//Time Complexity O(n log n), Space Complexity O(1);