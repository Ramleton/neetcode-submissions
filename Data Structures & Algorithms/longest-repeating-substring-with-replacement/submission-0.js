class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Int32Array(26);
        let left = 0;
        let maxCount = 0;
        let maxLen = 0;

        for (let right = 0; right < s.length; right++) {
            const code = s.charCodeAt(right) - 65;
            count[code]++;
            if (count[code] > maxCount) {
                maxCount = count[code];
            }
            if ((right - left + 1) - maxCount > k) {
                count[s.charCodeAt(left) - 65]--;
                left++;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
