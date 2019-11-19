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
    
    let result = [];
    
    const postOrderHelper = (root) => {
        if(root == null) return;
        if(root.children.length) {
            for(let i = 0; i < root.children.length; i++) {
                postOrderHelper(root.children[i]);
            }
        }
        result.push(root.val);
    }
    postOrderHelper(root);
    return result;
};