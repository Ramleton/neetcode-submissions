class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniques = new Set();
        for (const num of nums) {
            if (uniques.has(num)) return true;
            uniques.add(num);
        }
        return false;
    }
}
