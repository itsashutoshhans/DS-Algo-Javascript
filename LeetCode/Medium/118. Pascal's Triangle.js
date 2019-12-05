//https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let currentRow = 1;
    let result = [];
    while(currentRow <= numRows) {
        tempRow = [];
        let size = currentRow
        for(let i = 0; i < size; i++) { // size of row = rowNumber
            if(i == 0 || i == size - 1) {
                tempRow.push(1);
            } else {
                if(currentRow > 1) {
                    tempRow.push(result[currentRow-2][i] + result[currentRow-2][i-1]);
                }
            }
        }
        result.push(tempRow);
        currentRow++;
    }
    return (result);
};