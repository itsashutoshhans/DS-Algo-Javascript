// https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    // since that element is exactly half the number of size of the array
    // that means considering a subarrays of length 4 or 2 there must be one element in a sub array of two or 2 elements in atleast one of the sub arrays of length 4
    // so the element will repeat itself at a distance of either 1, 2 or 3
    
    // time complexity - O(n), space complexity - o(1)
    
    for (let i = 0; i < A.length; i++) {
        if(A[i] === A[i+1] || A[i] === A[i+2] || A[i] === A[i+3]) {
            return A[i];
        }
    }
};