// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let seq = [];
    seq[0] = 0;
    seq[1] = 1;
    for (let i = 2; i <= N; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
   
    return seq[N];
};