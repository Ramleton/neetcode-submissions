class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adjList = new Map();
        for (let i = 0; i < n; i++)
            adjList.set(i, []);
        for (const [a, b] of edges) {
            adjList.get(a).push(b);
            adjList.get(b).push(a);
        }

        let numConnectedComponents = 0;
        const visited = new Set();

        const dfs = (node) => {
            visited.add(node);
            for (const neighbor of adjList.get(node)) {
                if (!visited.has(neighbor))
                    dfs(neighbor);
            }
            return true;
        }

        for (let i = 0; i < n; i++) {
            if (!visited.has(i)) {
                dfs(i);
                numConnectedComponents++;
            }
        }

        return numConnectedComponents;
    }
}
