class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const uniqueKeys = Array.from(map.keys());

        uniqueKeys.sort((a, b) => map.get(b) - map.get(a));

        return uniqueKeys.slice(0, k);
    }
}
