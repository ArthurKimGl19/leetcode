/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;

    function traverse(node){
        if (!node.val) return;

        let rightPointer = node.right;
        let leftPointer = node.left;
        node.right = leftPointer;
        node.left = rightPointer;

        if (node.right) traverse(node.right);
        if (node.left) traverse(node.left);
    }
    traverse(root);
    return root;

    //Time Complexity O(n), Space Complexity O(1);
};