class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        const adjList = new Map();
        
        for (const word of words) {
            for (const char of word) {
                if (!adjList.has(char)) adjList.set(char, new Set());
            }
        }

        for (let i = 0; i < words.length - 1; i++) {
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);

            if (w1.length > w2.length && w1.startsWith(w2)) {
                return "";
            }

            for (let j = 0; j < minLen; j++) {
                if (w1[j] !== w2[j]) {
                    adjList.get(w1[j]).add(w2[j]);
                    break;
                }
            }
        }

        console.log(adjList);

        const visited = new Set();
        const visiting = new Set();
        const result = [];

        const dfs = (char) => {
            if (visiting.has(char)) return false;
            if (visited.has(char)) return true;

            visiting.add(char);

            for (const neighbor of adjList.get(char)) {
                if (!dfs(neighbor)) return false;
            }

            visiting.delete(char);
            visited.add(char);

            result.push(char);
            return true;
        }

        for (const char of adjList.keys()) {
            if (!dfs(char)) return "";
        }

        return result.reverse().join('');
    }
}
