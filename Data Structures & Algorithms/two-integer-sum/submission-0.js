class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let left = 0; left < nums.length; left++) {
            for (let right = 1; right < nums.length; right++) {
                if (left !== right && nums[left] + nums[right] === target)
                    return [left, right];
            }
        } 
    }
}
