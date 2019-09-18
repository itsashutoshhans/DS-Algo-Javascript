// https://leetcode.com/problems/sort-array-by-parity/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let left = 0;
    let right = 0;
    while (right < A.length) {
        
        // if the current element is even move forward
        // if the current element is odd then swap with the next even element
        
        if(A[left] % 2  === 0) { // even 
            left++;
            right++;
            
        } else {
            // odd
            if(A[right] % 2 === 0) {
                // swap
                let temp = A[right];
                A[right] = A[left];
                A[left] = temp;
                left++;
            }
            right++;
            
        }
    }
    return A;
};