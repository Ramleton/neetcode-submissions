class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const words = [];
        while (i < str.length) {
            const j = str.indexOf('#', i);
            const wordLen = parseInt(str.substring(i, j), 10);
            const start = j + 1;
            const end = start + wordLen;
            words.push(str.slice(start, end));
            i = end;
        }
        return words;
    }
}
