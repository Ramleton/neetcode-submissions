class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currMax = nums[0];
        let globalMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            currMax = Math.max(nums[i], currMax + nums[i]);
            globalMax = Math.max(globalMax, currMax);
        }

        return globalMax;
    }
}
