class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            const mid = (left + right) >> 1;

            if (nums[mid] === target) return mid;

            // Is the left half sorted?
            if (nums[left] <= nums[mid]) {
                // Is the target within the sorted half?
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                // The target is within the other half
                } else {
                    left = mid + 1;
                }
            // The right half must be sorted
            } else {
                // Is the target within the sorted half?
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
