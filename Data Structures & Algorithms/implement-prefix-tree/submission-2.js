class TreeNode {
    validWord;
    children;
    constructor(validWord = false) {
        this.validWord = validWord;
        this.children = new Map();
    }
}

class PrefixTree {
    root;
    constructor() {
        this.root = new TreeNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const child = curr.children.get(word[i]);
            if (child) {
                if (i === word.length - 1)
                    child.validWord = true;
                curr = child;  
            } else {
                const newChild = new TreeNode(i === word.length - 1);
                curr.children.set(word[i], newChild);
                curr = newChild;
            }
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            const child = curr.children.get(word[i]);
            if (!child) return false;
            if (i === word.length - 1)
                return child.validWord;
            curr = child;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            const child = curr.children.get(prefix[i]);
            if (!child) return false;
            curr = child;
        }
        return true;
    }
}
