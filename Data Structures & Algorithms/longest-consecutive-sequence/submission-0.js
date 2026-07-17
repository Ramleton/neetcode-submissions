class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        const sortedNums = nums.sort((a, b) => a - b);
        let longest = 1;
        let curr = 1;
        let i = 1;
        while (i < nums.length) {
            if (sortedNums[i] - sortedNums[i - 1] === 1) {
                curr++;
            } else if (sortedNums[i] - sortedNums[i - 1] !== 0) {
                longest = Math.max(curr, longest);
                curr = 1;
            }
            i++;
        }
        longest = Math.max(curr, longest);
        return longest;
    }
}
