// https://leetcode.com/problems/cousins-in-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // 1 - get the parent and depth of each node
    let xParent = null;
    let yParent = null;
    let xDepth = -1;
    let yDepth = -1;
    
    function getParentAndDepth(root, x, y, depth, parent) {
        if(root === null) return;
        if(root.val === x) {
            xParent = parent;
            xDepth = depth;
        } else if(root.val === y) {
            yParent = parent;
            yDepth = depth;
        }
        if(xParent && yParent) return;
        getParentAndDepth(root.left, x, y, depth + 1, root);
        getParentAndDepth(root.right, x, y, depth + 1, root);
    }
    
    getParentAndDepth(root, x, y, 0, null);
    //console.log(xParent.val, yParent.val)
    return (xParent !== yParent) && (xDepth === yDepth);
};