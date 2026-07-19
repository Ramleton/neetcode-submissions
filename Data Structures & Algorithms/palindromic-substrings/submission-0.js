class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let numberFound = 0;

        const expandFromCenter = (left, right) => {
            while (left >= 0 && right < s.length && s[left] === s[right]) {
                left--;
                right++;
                numberFound++;
            }
        }

        for (let i = 0; i < s.length; i++) {
            expandFromCenter(i, i);
            expandFromCenter(i, i + 1);
        }

        return numberFound;
    }
}
