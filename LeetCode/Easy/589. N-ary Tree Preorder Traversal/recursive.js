// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    
    let result = [];

    // recursion
    const preOrderHelper = (root) => {
        if(root === null) return;
        result.push(root.val);
        if(root.children) {
            for(let i = 0; i < root.children.length; i++) {
                preOrderHelper(root.children[i]);
            }
        }
    }
    
    preOrderHelper(root);
    return result;
};