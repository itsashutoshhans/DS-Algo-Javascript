// https://leetcode.com/problems/spiral-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return [];
    let rowStart = 0,
        rowEnd = matrix.length-1,
        colStart = 0,
        colEnd = matrix[0].length-1,
        result = [];
     let count = 0;
     
     while(rowStart <= rowEnd && colStart <= colEnd) {
         // first row of the remaining rows
         for(let i = colStart; i <= colEnd; i++){
             result.push(matrix[rowStart][i]);
         }
         rowStart++;
         
         // last col of the remaining cols
         
         for(let i = rowStart; i <= rowEnd; i++) {
             result.push(matrix[i][colEnd]);
         }
         colEnd--;
         
         // last row of the remaining rows
         
         if(rowStart <= rowEnd) {
             for(let i = colEnd; i >= colStart; i--) {
                 result.push(matrix[rowEnd][i]);
             }
             rowEnd--;
         }
         
         
         // first col of the remaining cols
         if(colStart <= colEnd) {
              for(let i = rowEnd; i >= rowStart; i--) {
                 result.push(matrix[i][colStart]);
             }
             colStart++;
         }
         
     }
     return result;
 };