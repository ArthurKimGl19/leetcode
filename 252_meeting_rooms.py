class Solution:
    def canAttendMeetings(self, intervals: List[List[int]]) -> bool:
        if len(intervals) < 2:
            return True
        
        sortedIntervals = sorted(intervals, key=lambda x: x[0])
        currentEnd = sortedIntervals[0][1]

        for i in range(1, len(sortedIntervals)):
            if currentEnd > sortedIntervals[i][0]:
                return False
            if currentEnd < sortedIntervals[i][1]:
                currentEnd = sortedIntervals[i][1]
        return True