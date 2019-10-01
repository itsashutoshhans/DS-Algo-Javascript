// https://leetcode.com/problems/duplicate-zeros/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // find the number of the duplicates till the point when 
    // the elements starts to go beyond the array which would 
    // not be part of the new array
    
    let dupCounts = 0, length = arr.length - 1;
    
    for(let left=0; left<= length - dupCounts; left++) {
        if (arr[left] === 0) {
            if(left === length - dupCounts){
                arr[length] = 0;
                length--;
                break;
            }    
            dupCounts++;
        }
    }
    
    // start from the last element and start moving to the end 
    let last  = length - dupCounts;
    for(let i = last; i>= 0; i--) {
       
        if(arr[i] === 0) {
            arr[i + dupCounts] = 0;
            dupCounts--;
            arr[i + dupCounts] = 0;
        } else {
             arr[i + dupCounts] = arr[i];
        }
    }
    
};