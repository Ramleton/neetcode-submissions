class TreeNode {
    validWord;
    children;
    constructor(validWord = false) {
        this.validWord = validWord;
        this.children = new Map();
    }
}

class PrefixTree {
    children;
    constructor() {
        this.children = new Map();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let children = this.children;
        for (let i = 0; i < word.length; i++) {
            const child = children.get(word[i]);
            if (child) {
                if (i === word.length - 1)
                    child.validWord = true;
                children = child.children;  
            } else {
                const newChild = new TreeNode(i === word.length - 1);
                children.set(word[i], newChild);
                children = newChild.children;
            }
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let children = this.children;
        for (let i = 0; i < word.length; i++) {
            const child = children.get(word[i]);
            if (!child) return false;
            console.log(`Child found for ${word[i]} in ${word}`)
            if (i === word.length - 1)
                return child.validWord;
            children = child.children;
        }
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let children = this.children;
        for (let i = 0; i < prefix.length; i++) {
            const child = children.get(prefix[i]);
            if (!child) return false;
            children = child.children;
        }
        return true;
    }
}
