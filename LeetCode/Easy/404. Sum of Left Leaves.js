// https://leetcode.com/problems/sum-of-left-leaves/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    
    function calculateSum(root) {
        if(!root) return;
        if(root.left && root.left.left === null && root.left.right === null) {
            sum += root.left.val;
        }
        calculateSum(root.left);
        calculateSum(root.right);
    }
    calculateSum(root);
    return sum;
};