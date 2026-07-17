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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;
        const temp = root.left;
        root.left = this.helper(root.right);
        root.right = this.helper(temp);
        return root;
    }

    helper(root) {
        if (!root) return root;
        const temp = root.left;
        root.left = this.helper(root.right);
        root.right = this.helper(temp);
        return root;
    }
}
