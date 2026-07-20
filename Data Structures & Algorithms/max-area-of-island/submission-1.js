class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        const bfs = (row, col) => {
            let currArea = 0;
            grid[row][col] = 0;
            const queue = [[row, col]];
            let queueHead = 0;
            while (queueHead < queue.length) {
                const [r, c] = queue[queueHead];
                currArea++;
                for (const [dr, dc] of directions) {
                    const [nr, nc] = [r + dr, c + dc];
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                        queue.push([nr, nc]);
                        grid[nr][nc] = 0;
                    }
                }
                queueHead++;
            }
            maxArea = Math.max(currArea, maxArea);
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    bfs(r, c);
                }
            }
        }

        return maxArea;
    }
}
