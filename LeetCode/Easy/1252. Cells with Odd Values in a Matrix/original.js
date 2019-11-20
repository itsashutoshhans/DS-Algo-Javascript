// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/

/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
    
    const incrementCells = (index, type, matrix) => {
        if(type === 'row') {
            for(let i = 0; i < m; i++) {
                matrix[index][i]++;
            }
        } else {
            for(let i = 0; i < n; i++) {
                matrix[i][index]++;
            }
        }
    }
    
    // construct the array
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let subArray = new Array(m).fill(0);
        matrix.push(subArray);
    }
    
    for (let i = 0; i < indices.length; i++) {
        
        // increment particular row or column based on the indices
        incrementCells(indices[i][0], 'row', matrix);
        incrementCells(indices[i][1], 'column', matrix);
    }
    
    let count = 0;
    
    // count the number of odd values
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(matrix[i][j] % 2 !== 0) {
                count++;
            }
        }
    }
    
    return count;
};