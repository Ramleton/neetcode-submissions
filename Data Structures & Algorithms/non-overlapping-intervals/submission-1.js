class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let prevEnd = intervals[0][1];
        let intervalsRemoved = 0;
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) {
                intervalsRemoved++;
            } else {
                prevEnd = intervals[i][1];
            }
        }
        return intervalsRemoved;
    }
}
