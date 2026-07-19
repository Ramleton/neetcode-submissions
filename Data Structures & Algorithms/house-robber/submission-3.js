class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const dp = [nums[0], Math.max(nums[0], nums[1])];
        const n = nums.length;
        for (let i = 2; i < n; i++) {
            dp.push(Math.max(dp[i - 1], dp[i - 2] + nums[i]))
        }
        return dp[n - 1];
    }
}
