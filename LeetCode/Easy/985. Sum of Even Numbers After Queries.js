// https://leetcode.com/problems/sum-of-even-numbers-after-queries/

/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    // calculate the initial even sum
    let sum = 0, result = [];
    
    for (let i = 0; i < A.length; i++) {
        if(A[i] % 2 === 0) {
            sum += A[i];
        }
    }
    
    for (let i = 0; i < queries.length; i++) {
        
        const val = queries[i][0];
        const index = queries[i][1];
        
        // if the val at that index is even i.e. included in the sum
        if(A[index] % 2 === 0) {
            
            // if adding new val is also even
            if((A[index] + val) % 2 === 0) {
                sum += val;
            } else {
                sum -= A[index];
            }
            A[index] += val;
        } else {
            
            // if the old value is odd
            if((A[index] + val) % 2 === 0) { // new value even
                sum+= A[index] + val;
            }
            A[index] += val;
        }
        result.push(sum);
    }
    return result;
};