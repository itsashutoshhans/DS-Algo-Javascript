// https://leetcode.com/problems/binary-tree-paths/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    if(!root) return paths;
    
    function getPaths(root, currentPath) {
        if(!root.left && !root.right) paths.push(currentPath + root.val);
        if(root.left) getPaths(root.left, currentPath + root.val + '->');
        if(root.right) getPaths(root.right, currentPath + root.val + '->');
    }
    
    getPaths(root, '');
    
    return paths;
};