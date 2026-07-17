class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;
        while (left < right) {
            if (heights[left] < heights[right]) {
                maxWater = Math.max(maxWater, heights[left] * (right - left));
                left++;
            } else {
                maxWater = Math.max(maxWater, heights[right] * (right - left));
                right--;
            }
        }
        return maxWater;
    }
}
