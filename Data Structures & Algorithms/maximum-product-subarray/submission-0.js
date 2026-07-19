class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        if (nums.length === 1) return nums[0];
        const minProductDP = new Array(nums.length);
        const maxProductDP = new Array(nums.length);
        minProductDP[0] = nums[0];
        maxProductDP[0] = nums[0];
        let globalMax = nums[0];

        for (let i = 1; i < nums.length; i++) {
            const curr = nums[i];
            const option1 = curr;
            const option2 = maxProductDP[i - 1] * curr;
            const option3 = minProductDP[i - 1] * curr;

            maxProductDP[i] = Math.max(option1, option2, option3);
            minProductDP[i] = Math.min(option1, option2, option3);

            globalMax = Math.max(globalMax, maxProductDP[i]);
        }

        return globalMax;
    }
}
