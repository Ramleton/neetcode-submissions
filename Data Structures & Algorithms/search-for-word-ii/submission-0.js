class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const rows = board.length;
        const cols = board[0].length;
        const result = [];

        const root = new TrieNode();
        for (const word of words) {
            let curr = root;
            for (const char of word) {
                if (!curr.children.has(char)) {
                    curr.children.set(char, new TrieNode());
                }
                curr = curr.children.get(char);
            }
            curr.word = word;
        }
        
        const backtrack = (r, c, node) => {
            const char = board[r][c];
            const nextNode = node.children.get(char);

            if (!nextNode) return;

            if (nextNode.word) {
                result.push(nextNode.word);
                nextNode.word = null;
            }

            board[r][c] = '#';

            if (r + 1 < rows) backtrack(r + 1, c, nextNode);
            if (r - 1 >= 0) backtrack(r - 1, c, nextNode);
            if (c + 1 < cols) backtrack(r, c + 1, nextNode);
            if (c - 1 < cols) backtrack(r, c - 1, nextNode);

            board[r][c] = char;
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                backtrack(i, j, root);
            }
        }

        return result;
    }
}
