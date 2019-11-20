// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/submissions/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    let rows = new Array(n).fill(0);
    let cols = new Array(m).fill(0);
    
    for(let i = 0; i < indices.length; i++) {
        rows[indices[i][0]]++;
        cols[indices[i][1]]++;
    }
    
    let count = 0;
    
    for(let i = 0; i < n; i++){
        for(let j = 0; j< m; j++) {
            if((rows[i] + cols[j]) % 2 !== 0) {
                count++;
            }
        }
    }
    return count;
};