/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length < 2){
        return true;
    }
    intervals = [...intervals].sort((a,b) => a[0]-b[0]);
    let currentEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++){
        if (currentEnd > intervals[i][0]) return false;
        if (currentEnd < intervals[i][1]) currentEnd = intervals[i][1];
    }
    return true;
};
//Time Complexity O(n log n), Space Complexity O(1);