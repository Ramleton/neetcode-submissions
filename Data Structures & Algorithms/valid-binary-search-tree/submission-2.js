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
     * @return {boolean}
     */
    isValidBST(root) {
        return this.helper(root.left, null, root.val) && this.helper(root.right, root.val, null);
    }

    helper(root, min, max) {
        if (!root) return true;
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false;
        }

        return this.helper(root.left, min, root.val) && this.helper(root.right, root.val, max);
    }
}
