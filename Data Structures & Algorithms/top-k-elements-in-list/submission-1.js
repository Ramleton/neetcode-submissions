class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        const uniqueKeys = Array.from(Object.keys(map));

        uniqueKeys.sort((a, b) => map[b] - map[a]);

        return uniqueKeys.slice(0, k);
    }
}
