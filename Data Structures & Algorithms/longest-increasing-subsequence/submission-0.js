class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(1);
        let globalMax = 1;

        for (let i = 1; i < nums.length; i++) {
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j])
                    dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            globalMax = Math.max(globalMax, dp[i]);
        }

        return globalMax;
    }
}
