class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const result = [];

        const backtrack = (startIdx, curr, remaining) => {
            if (remaining === 0)
                return result.push([...curr]);
            if (remaining < 0)
                return;
            for (let i = startIdx; i < nums.length; i++) {
                curr.push(nums[i]);

                backtrack(i, curr, remaining - nums[i]);

                curr.pop();
            }
        }

        backtrack(0, [], target);
        return result;
    }
}
