// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    
    // BFS using queues
    let queue = [[root, 0]];
    let result = [];
    
    while(queue.length) {
        const current = queue.shift();
        const [node, level] = current;
        if(level >= result.length) result[level] = [];
        result[level].push(node.val);
        if(node.left) queue.push([node.left, level + 1]);
        if(node.right) queue.push([node.right, level + 1]);
    }
    
    return result.reverse();
};