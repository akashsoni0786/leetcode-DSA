/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Helper function to find the LCA
    function findLCA(node) {
        // If we reach a null node, return null
        if (node === null) return null;
        
        // If we find either p or q, return the node
        if (node === p || node === q) return node;
        
        // Recursively search in the left and right subtrees
        let left = findLCA(node.left);
        let right = findLCA(node.right);
        
        // If both left and right are not null, it means p and q are found in different subtrees
        if (left !== null && right !== null) return node;
        
        // Otherwise, return the non-null child (either left or right)
        return left !== null ? left : right;
    }
    
    // Call the helper function with the root node
    return findLCA(root);
};
