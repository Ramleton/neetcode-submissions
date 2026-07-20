/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals.length) return 0;
        const start = intervals.map((interval) => interval.start).sort((a, b) => a - b);
        const end = intervals.map((interval) => interval.end).sort((a, b) => a - b); 
        let activeRooms = 0;
        let maxRooms = 0;
        let s = 0;
        let e = 0;
        while (s < intervals.length) {
            if (start[s] < end[e]) {
                s++;
                activeRooms++;
            } else {
                e++;
                activeRooms--;
            }
            maxRooms = Math.max(maxRooms, activeRooms);
        }
        return maxRooms;
    }
}
