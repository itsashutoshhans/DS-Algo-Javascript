// https://leetcode.com/problems/path-sum/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 // using helper method

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum_helper = function(root, sum) {
    if(!root) return false;
    let currentSum = 0;
    
    function hasPathSumHelp(root, currentSum) {
        if(!root) return false;
        currentSum += root.val;
        if(root.left === null && root.right === null ) return currentSum ===sum;
        return hasPathSumHelp(root.left, currentSum) ||
        hasPathSumHelp(root.right, currentSum);
    }
    
    return hasPathSumHelp(root, 0);
    
};

// subtracting sum each time

var hasPathSum = function(root, sum) {
    if(!root) return false;
    if(!root.left && !root.right) return root.val === sum;
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    
};