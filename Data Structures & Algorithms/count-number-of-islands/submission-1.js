class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;
        const rows = grid.length;
        const cols = grid[0].length;
        let numIslands = 0;
        const dfs = (row, col) => {
            grid[row][col] = '0';
            if (row - 1 >= 0 && grid[row - 1][col] === '1')
                dfs(row - 1, col);
            if (row + 1 < rows && grid[row + 1][col] === '1')
                dfs(row + 1, col);
            if (col - 1 >= 0 && grid[row][col - 1] === '1')
                dfs(row, col - 1);
            if (col + 1 < cols && grid[row][col + 1] === '1')
                dfs(row, col + 1);
        }

        for (let j = 0; j < cols; j++) {
            for (let i = 0; i < rows; i++) {
                if (grid[i][j] === '1') {
                    numIslands++;
                    dfs(i, j);
                }
            }
        }
        return numIslands;
    }
}
