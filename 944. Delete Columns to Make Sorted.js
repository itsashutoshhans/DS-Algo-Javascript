// https://leetcode.com/problems/delete-columns-to-make-sorted/


/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    const stringLength = A[0].length;
    const comparisonLength = A.length-1; // length of array
    let count = 0;
    for (let i = 0; i < stringLength; i++) {
        for (let j = 0; j < comparisonLength; j++) {
           if(A[j][i] > A[j+1][i]) {
               count++;
               break;
           }
            
        }
    }
    return count;
};