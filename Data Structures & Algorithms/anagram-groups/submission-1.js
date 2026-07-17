class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const count = new Uint8Array(26);

            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 97]++;
            }

            const key = String.fromCharCode(...count);

            if (!map.has(key))
                map.set(key, []);
            
            map.get(key).push(str);
        }
        return Array.from(map.values());
    }
}
