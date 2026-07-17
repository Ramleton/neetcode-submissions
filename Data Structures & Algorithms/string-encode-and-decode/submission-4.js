class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';
        for (const str of strs)
            res += `${str.length}#${str}`;
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        const words = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== '#')
                j++;
            const wordLen = Number(str.slice(i, j));
            const start = j + 1;
            const end = start + wordLen;
            words.push(str.slice(start, end));
            i = end;
        }
        return words;
    }
}
