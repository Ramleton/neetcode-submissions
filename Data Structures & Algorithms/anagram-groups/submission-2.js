class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const count = new Uint8Array(26);
        for (const str of strs) {
            count.fill(0);
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 97]++;
            }

            const key = String.fromCharCode(...count);

            if (!map[key])
                map[key] = [];
            
            map[key].push(str);
        }
        return Object.values(map);
    }
}
