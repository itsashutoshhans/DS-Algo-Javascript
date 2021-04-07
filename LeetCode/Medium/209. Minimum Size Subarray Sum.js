// https://leetcode.com/problems/minimum-size-subarray-sum/

// Time complexity O(n^2)

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    let length = Infinity;
    let sums = new Array(nums.lenght).fill(0);
    sums[0] = nums[0];
    // Brute force with memoization
    
    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i-1] + nums[i];
    }
    
    for (let i = 0; i < nums.length; i++) {
        // i = start index
        for (let j = i; j < nums.length; j++) {
            // j = end index
            // calculate sum from i to j
            let localSum = sums[j] - sums[i] + nums[i];
            if(localSum >= s) {
                length = Math.min(length, j - i);
                break; // found min length for the current i, move to next i
            }
        }
    }
    return length === Infinity ? 0 : length + 1;
};

// Sliding window - O(n)

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    
    // sliding window pattern
    
    let total = 0; // sum of current window
    let start = 0;
    let end = 0
    let length = Infinity;
    
    while (start < nums.length) {
        
        // if the sum of the current window is less than sum, move the window 
        // to the right
        if (total < s && end < nums.length) {
            total += nums[end];
            end++;
        }
        
        // if the current window adds upto the given sum we can shrink the
        // window
        else if (total >= s) {
            length = Math.min(length, end - start);
            total -= nums[start];
            start++;
        }
        
        // current total is less than total and we have reached the end
        else {
            break;
        }
 
    }
    return length === Infinity ? 0 : length;
    
};