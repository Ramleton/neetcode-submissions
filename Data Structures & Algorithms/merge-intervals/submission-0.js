class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => {
            if (a[0] !== b[0])
                return a[0] - b[0];
            return a[1] - b[1];
        });
        console.log(intervals);
        const result = [];
        let i = 0;
        let n = intervals.length;
        while (i < n) {
            let j = i;
            const newInterval = intervals[i];
            while (j < n && intervals[i][1] >= intervals[j][0]) {
                newInterval[1] = Math.max(newInterval[1], intervals[j][1]);
                j++;
            }
            i = j;
            result.push(newInterval);
        }
        return result;
    }
}
