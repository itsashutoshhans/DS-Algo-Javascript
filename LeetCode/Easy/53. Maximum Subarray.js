// https://leetcode.com/problems/maximum-subarray/


/* Method 1 Kadane's Algorithm - O(n) */

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray_kadane = function(nums) {
    let max = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(sum + nums[i], nums[i]);
        max = Math.max(sum, max);
    }
    return max;
};

/* Method 2 Brute force - O(n) */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_brute = function(nums) {
    let max = -Infinity;
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = 0; end < nums.length; end++) {
            if (start + end >= nums.length) break;
            sum += nums[start + end];
            max = Math.max(max, sum);
        }
    }
    return max;
};