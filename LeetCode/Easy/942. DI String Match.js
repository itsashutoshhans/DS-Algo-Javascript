// https://leetcode.com/problems/di-string-match/

// Time complexity O(n)

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    
    const length = S.length;
    let max = S.length;
    let min = 0;
    let result = [];
    
    for(let i = 0; i <= length; i++) {
        if(S[i] === 'I') {
            next = min++;            
        } else {
            next = max--;
        }
        result.push(next);
    }
    return (result);
};