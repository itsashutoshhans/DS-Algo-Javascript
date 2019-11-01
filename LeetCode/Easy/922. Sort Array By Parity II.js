// https://leetcode.com/problems/sort-array-by-parity-ii/

// time complexity O(n)
// space complexity O(1)

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    
    const swap = (i, j) => {
        let temp = A[i];
        A[i] = A[j];
        A[j] = temp;
    }
    
    let i = 0;
    let j = 1;
    const n = A.length;
    
    while(i < n && j < n) {
        while( i < n && A[i] % 2 === 0) { i+=2; }
        while( j < n && A[j] % 2 === 1) { j+=2; }
        if(i < n && j < n) {
            swap(i, j);
        }
    }

    return A;
}