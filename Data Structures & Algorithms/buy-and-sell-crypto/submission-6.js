class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let max = 0;
        const len = prices.length;

        for (let i = 1; i < len; i++) {
            if (prices[i] < min) {
                min = prices[i];
            } else {
                const diff = prices[i] - min;
                if (diff > max) {
                    max = diff;
                }
            }
        }

        return max;
    }
}
