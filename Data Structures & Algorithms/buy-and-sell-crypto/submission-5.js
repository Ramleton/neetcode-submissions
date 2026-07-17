class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;
        
        for (let i = 1; i < prices.length; i++) {
            const price = prices[i];
            if (price < minPrice) {
                minPrice = price;
            } else {
                const profit = price - minPrice;
                if (profit > maxProfit)
                    maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }
}
