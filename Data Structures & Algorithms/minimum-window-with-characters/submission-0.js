class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return '';
        
        const needed = new Int32Array(128);
        for (let i = 0; i < t.length; i++) {
            needed[t.charCodeAt(i)]++;
        }

        let remaining = t.length;
        let left = 0;
        let minStart = 0;
        let minLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const rightCode = s.charCodeAt(right);

            if (needed[rightCode] > 0) {
                remaining--;
            }
            needed[rightCode]--;

            while (remaining === 0) {
                const currentLen = right - left + 1;
                if (currentLen < minLength) {
                    minLength = currentLen;
                    minStart = left;
                }

                const leftCode = s.charCodeAt(left);
                needed[leftCode]++;

                if (needed[leftCode] > 0) {
                    remaining++;
                }

                left++;
            }
        }
        return minLength === Infinity ? "" : s.slice(minStart, minStart + minLength);
    }
}
