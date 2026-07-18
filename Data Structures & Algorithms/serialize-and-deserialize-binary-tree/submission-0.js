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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return 'N';
        return root.val + ',' + this.serialize(root.left) + ',' + this.serialize(root.right);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;
        const nodes = data.split(',');
        nodes.reverse();

        const buildTree = () => {
            const val = nodes.pop();

            if (val === 'N' || val === undefined) {
                return null;
            }

            const node = new TreeNode(parseInt(val));

            node.left = buildTree();
            node.right = buildTree();

            return node;
        }

        return buildTree();
    }
}
