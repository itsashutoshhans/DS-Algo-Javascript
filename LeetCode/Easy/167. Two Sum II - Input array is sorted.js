// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0, end = numbers.length - 1;
    while( start < end) {
        const sum = numbers[start] + numbers[end];
        
        if(sum === target) {
            return [start+1, end+1];
        }
        
        if(sum > target) end--;
        if(sum < target) start++;
    }
    
};