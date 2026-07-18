class TreeNode {
    validWord;
    children;
    constructor(validWord = false) {
        this.validWord = validWord;
        this.children = new Map();
    }
}

class WordDictionary {
    root;
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!curr.children.has(char)) {
                curr.children.set(char, new TreeNode());
            }
            curr = curr.children.get(char);
        }
        curr.validWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const dfs = (node, index) => {
            if (index === word.length)
                return node.validWord;
            
            const char = word[index];

            if (char === '.') {
                for (const childNode of node.children.values()) {
                    if (dfs(childNode, index + 1))
                        return true;
                }
                return false;
            } else {
                const nextNode = node.children.get(char);
                if (!nextNode) return false;
                return dfs(nextNode, index + 1);
            }
        }
        return dfs(this.root, 0);
    }
}
