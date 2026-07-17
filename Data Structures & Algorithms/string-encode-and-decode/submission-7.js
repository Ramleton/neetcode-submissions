class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const parts = [];
        for (let i = 0; i < strs.length; i++) {
            parts.push(strs[i].length, '#', strs[i]);
        }
        return parts.join('');
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
            words.push(str.substring(start, end));
            i = end;
        }
        return words;
    }
}
