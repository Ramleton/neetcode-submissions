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

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, count] of Object.entries(map)) {
            buckets[count].push(Number(num));
        }

        const res = [];
        for (let freq = buckets.length - 1; freq > 0; freq--) {
            for (const num of buckets[freq]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }

        return res;
    }
}
