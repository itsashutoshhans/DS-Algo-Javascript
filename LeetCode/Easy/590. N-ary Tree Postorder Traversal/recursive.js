// https://leetcode.com/problems/n-ary-tree-postorder-traversal/

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
var postorder = function(root) {
    
    if(root === null) return [];
    let result = [];
    let stack  = [];
    stack.push(root);
    
    while(stack.length > 0) {
        let currentNode = stack.pop();
        result.push(currentNode.val);
        if(currentNode.children.length > 0) {
            for(let i = 0; i < currentNode.children.length; i++) {
                stack.push(currentNode.children[i]);
            }
        }
        
    }
    
    return result.reverse();
};