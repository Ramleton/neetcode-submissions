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
    maxPathSum(root) {
        let globalMax = -Infinity;

        const getBranchGain = (node) => {
            if (!node) return 0;

            const leftGain = Math.max(getBranchGain(node.left), 0);
            const rightGain = Math.max(getBranchGain(node.right), 0);

            const currentPathSum = node.val + leftGain + rightGain;

            globalMax = Math.max(globalMax, currentPathSum);

            return node.val + Math.max(leftGain, rightGain);
        };

        getBranchGain(root);
        return globalMax;
    }
}
