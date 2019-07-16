// https://leetcode.com/problems/symmetric-tree/

// way [1/2] Iterative approach

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
var isSymmetric_iterative = function(root) {
    if(root === null) return true;
    const stack = [];
    stack.push(root.left);
    stack.push(root.right);
    while(stack.length > 0) {
        const left = stack.pop();
        const right = stack.pop();
        if(left === null && right === null) continue;
        if(left === null || right === null || left.val !== right.val) return false;
        stack.push(left.left, right.right);
        stack.push(right.left, left.right);
    }
    return true;
}; 

// way [2/2] Recursive approach

var isSymmetric_recursive = function(root) {
    return root === null || compareNodes(root.left, root.right);
    
    function compareNodes(leftNode, rightNode) {
        if(leftNode === null || rightNode === null) return leftNode === rightNode;
        if(leftNode.val !== rightNode.val) return false;
        return compareNodes(leftNode.left, rightNode.right) && compareNodes(leftNode.right, rightNode.left);
        
        }
}; 