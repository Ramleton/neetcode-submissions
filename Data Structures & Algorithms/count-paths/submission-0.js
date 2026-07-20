class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const dp = new Array(m).fill(new Array(n).fill(1));
        for (let r = 1; r < m; r++) {
            for (let c = 1; c < n; c++) {
                dp[r][c] = dp[r - 1][c] + dp[r][c - 1];
            }
        }
        console.log(dp);
        return dp[m - 1][n - 1];
    }
}
