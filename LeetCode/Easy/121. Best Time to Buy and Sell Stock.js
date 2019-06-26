// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// O(n^2)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_bruteForce = function(prices) {
    // brute force
    let max = 0;
    for (let bought = 0; bought < prices.length - 1; bought++) {
        for (let sold = bought + 1; sold < prices.length; sold++) {
            if(prices[sold] - prices[bought] > 0) {
                max = Math.max(max, prices[sold] - prices[bought])
            }
        }
    }
    return max;
};

// O(n)

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // Kadane's algorithm
    let max = 0, profit = 0;
    for (let i = 1; i < prices.length; i++) {
        const currentProfit = prices[i] - prices[i-1];
        profit = Math.max(profit + currentProfit, currentProfit);
        max = Math.max(profit, max);
    }
    return max;
};