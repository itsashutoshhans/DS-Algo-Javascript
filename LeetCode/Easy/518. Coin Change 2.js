// https://leetcode.com/problems/coin-change-2/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // create initial array of size amount + 1 and fill this with 0
    // this array is being made to track the number of ways to sum upto ith amount 
    // with the coin available
    
    ways = new Array(amount+1).fill(0);
    ways[0] = 1; // number of ways to make amount 0  = 1 (i.e. don't include the coin)
    for (let coin of coins) {
        for (let e = coin; e < ways.length; e++) {
            ways[e] += ways [e - coin];
        }
    }
    return ways[amount];
};