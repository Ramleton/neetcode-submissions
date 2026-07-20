class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const dp = new Array(nums.length).fill(false);
        dp[nums.length - 1] = true;
        for (let i = nums.length - 2; i >= 0; i--) {
            const maxDistance = Math.min(nums.length - 1, i + nums[i]);
            dp[i] = dp.slice(i + 1, maxDistance + 1).includes(true);
        }
        return dp[0];
    }
}
