/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        if (this.isAncestor(root.left, p) && this.isAncestor(root.left, q))
            return this.lowestCommonAncestor(root.left, p, q);
        if (this.isAncestor(root.right, p) && this.isAncestor(root.right, q))
            return this.lowestCommonAncestor(root.right, p, q);
        return root;
    }

    isAncestor(root, p) {
        if (!root) return false;
        if (root.val === p.val) return true;
        return this.isAncestor(root.left, p) || this.isAncestor(root.right, p);
    }
}
