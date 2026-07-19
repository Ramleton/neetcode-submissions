class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        if (s.length <= 1) return s;
        let longest = '';
        
        const expandFromCenter = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
            }

            return s.slice(left + 1, right);
        }

        for (let i = 0; i < s.length; i++) {
            const oddPal = expandFromCenter(i, i);
            if (oddPal.length > longest.length) {
                longest = oddPal;
            }

            const evenPal = expandFromCenter(i, i + 1);
            if (evenPal.length > longest.length) {
                longest = evenPal;
            }
        }

        return longest;
    }
}
