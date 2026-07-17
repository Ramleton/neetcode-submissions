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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];
        
        const result = [];
        let currentLevel = [root];

        while (currentLevel.length > 0) {
            const currentValues = [];
            const nextLevel = [];
            for (let i = 0; i < currentLevel.length; i++) {
                const node = currentLevel[i];
                currentValues.push(node.val);

                if (node.left) nextLevel.push(node.left);
                if (node.right) nextLevel.push(node.right);
            }

            result.push(currentValues);
            currentLevel = nextLevel;
        }

        return result;
    }
}
