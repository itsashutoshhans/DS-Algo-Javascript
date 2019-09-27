// https://leetcode.com/problems/squares-of-a-sorted-array/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    // two pointers
    
    let left = 0;
    let right = A.length - 1;
    let squared = new Array(A.length);
    
    // compute and compare the squares of the elements at the two pointers
    
    for (let i = A.length - 1; i >= 0; i--) {
        const rightSquare = Math.pow(A[right], 2);
        const leftSquare = Math.pow(A[left], 2);
        
        if(rightSquare > leftSquare) {
            squared[i] = rightSquare;
            right--;
            
        } else {
            
            squared[i] = leftSquare;
            left++;
        }
    }
    
    
    return squared;
};