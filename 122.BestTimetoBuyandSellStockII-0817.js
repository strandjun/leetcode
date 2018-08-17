/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 * @param {number[]} prices
 * @return {number}
 */

/**
 * analysis(using graph be better):
 * prices has 3 situations:
 * one is consistently increasing, 
 * one has peaks and valleys, 
 * one is consistently decreasing.
 */
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};

var prices = [7, 1, 5, 3, 6, 4]; // Output: 7
/**
 * Explanation:
 * Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
 */

// var prices = [1, 2, 3, 4, 5]; // Output: 4
/**
 * Explanation:
 * Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later,
 * as you are engaging multiple transactions at the same time. You must sell before buying again.
 */

// var prices = [7, 6, 4, 3, 1]; // Output: 0
/**
 * Explanation:
 * In this case, no transaction is done, i.e. max profit = 0.
 */

var prices = [1, 7, 2, 3, 6, 7, 6, 7]; // Output: 12

console.log(maxProfit(prices));
