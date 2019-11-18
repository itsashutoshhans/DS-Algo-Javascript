// https://leetcode.com/problems/n-ary-tree-preorder-traversal/submissions/

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

    if(root === null) return [];
    let result = [];
    let stack = [];
    stack.push(root);
    
    while(stack.length > 0) {
        let currentNode  = stack.pop();
        result.push(currentNode.val);
        if(currentNode.children.length > 0) {
            for(let i = currentNode.children.length - 1; i >= 0; i--){
                stack.push(currentNode.children[i]);
            }
        }
    }
    return result;
};