class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        if (s.length === 1) return s[0] !== '0' ? 1 : 0;
        if (s.length === 2 && s[0] === '0') return 0;

        const n = s.length;

        const dp = new Array(n + 1).fill(0);

        dp[0] = 1;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            const oneDigit = parseInt(s.substring(i - 1, i));
            if (oneDigit >= 1 && oneDigit <= 9)
                dp[i] += dp[i - 1];
            
            const twoDigits = parseInt(s.substring(i - 2, i));
            if (twoDigits >= 10 && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }

        return dp[n];
    }
}
