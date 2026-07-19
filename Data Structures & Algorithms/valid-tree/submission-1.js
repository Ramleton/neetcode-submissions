class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const adjList = new Map();
        for (let i = 0; i < n; i++)
            adjList.set(i, []);
        for (const [a, b] of edges) {
            adjList.get(a).push(b);
            adjList.get(b).push(a);
        }

        console.log(adjList);

        const visited = new Set();

        const dfs = (node, parent) => {
            if (visited.has(node))
                return false;
            
            visited.add(node);

            for (const neighbor of adjList.get(node)) {
                if (neighbor !== parent && !dfs(neighbor, node))
                    return false;
            }

            return true;
        }

        if (!dfs(0, -1)) return false;

        return visited.size === n;
    }
}
