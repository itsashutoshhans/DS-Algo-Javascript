// https://leetcode.com/problems/univalued-binary-tree/

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
var isUnivalTree = function(root) {
    let value = root.val;
    function checkValue(root) {
       if(!root) return true;
       if(root.val === value) {
           return checkValue(root.left) && checkValue(root.right);
       } else return false;
    }
    
    return checkValue(root);
};