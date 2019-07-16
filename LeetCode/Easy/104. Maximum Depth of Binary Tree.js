// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
var maxDepth = function(root) {
    
    return root === null ? 0 : findHeight(root);
    
    function findHeight(root) {
        if(root === null) return 0;
        return 1 + Math.max(findHeight(root.left), findHeight(root.right));
    }
    
};