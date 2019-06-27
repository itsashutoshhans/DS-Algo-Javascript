// https://leetcode.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length).fill(0);
    dp[0] = cost[0]; // cost if person starts with step 0
    dp[1] = cost[1]; // cost if person starts with step 1
    for (let i = 2; i < cost.length; i++) {
        /** we can reach current step by either last step or last to last step
         * so we will check which one has least cost
         */
        dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i]);
        
    }
    return Math.min(dp[dp.length-1], dp[dp.length-2]);
};