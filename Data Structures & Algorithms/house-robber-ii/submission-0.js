class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1]);

        const robLinear = (houses) => {
            let prev2 = 0;
            let prev1 = houses[0];

            for (let i = 1; i < houses.length; i++) {
                let curr = Math.max(prev1, prev2 + houses[i]);
                prev2 = prev1;
                prev1 = curr;
            }
            return prev1;
        }

        const skipLastHouse = robLinear(nums.slice(0, nums.length - 1));
        const skipFirstHouse = robLinear(nums.slice(1));
        return Math.max(skipLastHouse, skipFirstHouse);
    }
}
