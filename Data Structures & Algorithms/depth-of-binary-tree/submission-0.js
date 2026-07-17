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
     * @return {number}
     */
    maxDepth(root) {
        if (!root) return 0;
        return Math.max(this.maxDepthHelper(root.left, 1), this.maxDepthHelper(root.right, 1));
    }

    /**
     * @param {TreeNode} root
     * @param {number} currDepth
     * @return {number}
     */
    maxDepthHelper(root, currDepth) {
        if (!root) return currDepth;
        return Math.max(
            this.maxDepthHelper(root.left, currDepth + 1),
            this.maxDepthHelper(root.right, currDepth + 1)
        );
    }
}
