class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let [maxProfit, minPrice, maxPrice] = [0, prices[0], prices[0]];
        for(let i = 0; i < prices.length; i++) {
            let price = prices[i];
            if(price < minPrice) {
                minPrice = price;
                maxPrice = price;
            }
            if(price > maxPrice) {
                maxProfit = Math.max((price - minPrice), maxProfit);
                maxPrice = price;
            }
        }
        return maxProfit;
    }
}
