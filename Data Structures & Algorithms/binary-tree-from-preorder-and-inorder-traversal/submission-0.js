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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            inorderMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        const arrayToTree = (leftBoundary, rightBoundary) => {
            if (leftBoundary > rightBoundary) return null;

            const rootVal = preorder[preorderIndex++];
            const root = new TreeNode(rootVal);

            const rootInorderIndex = inorderMap.get(rootVal);

            root.left = arrayToTree(leftBoundary, rootInorderIndex - 1);
            root.right = arrayToTree(rootInorderIndex + 1, rightBoundary);

            return root;
        }

        return arrayToTree(0, inorder.length - 1);
    }
}
