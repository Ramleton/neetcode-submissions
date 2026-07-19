class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];

        let prev2 = 0;
        let prev1 = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let curr = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
