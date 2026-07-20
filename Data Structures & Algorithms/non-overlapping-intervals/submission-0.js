class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
        let prevEnd = sortedIntervals[0][1];
        let intervalsRemoved = 0;
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i][0] < prevEnd) {
                // Overlaps
                prevEnd = Math.min(sortedIntervals[i][1], prevEnd);
                intervalsRemoved++;
            } else {
                prevEnd = sortedIntervals[i][1];
            }
        }
        return intervalsRemoved;
    }
}
