// https://leetcode.com/problems/balanced-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return true;
    function findHeight(root) {
        if(root === null) return 0;
        return 1 + Math.max(findHeight(root.left), findHeight(root.right));
    }
    
    let left = findHeight(root.left);
    let right = findHeight(root.right);
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};