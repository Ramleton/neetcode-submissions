class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (!s.length) return 0;
        const seen = new Set();
        let left = 0;
        let max = 1;
        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left]);
                left++;
            }
            seen.add(s[right]);
            max = Math.max(max, right - left + 1);
        }
        return max;
    }
}
