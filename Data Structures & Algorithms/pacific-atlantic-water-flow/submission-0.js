class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length;
        const cols = heights[0].length;

        const pacVisited = Array.from({ length: rows }, () => new Array(cols).fill(false));
        const atlVisited = Array.from({ length: rows }, () => new Array(cols).fill(false));

        const dfs = (r, c, visitedMatrix, prevHeight) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols)
                return;
            
            if (visitedMatrix[r][c])
                return;
            
            if (heights[r][c] < prevHeight)
                return;
            
            visitedMatrix[r][c] = true;

            dfs(r + 1, c, visitedMatrix, heights[r][c]);
            dfs(r - 1, c, visitedMatrix, heights[r][c]);
            dfs(r, c + 1, visitedMatrix, heights[r][c]);
            dfs(r, c - 1, visitedMatrix, heights[r][c]);
        }

        for (let r = 0; r < rows; r++) {
            dfs(r, 0, pacVisited, 0);
            dfs(r, cols - 1, atlVisited, 0);
        }

        for (let c = 0; c < cols; c++) {
            dfs(0, c, pacVisited, 0);
            dfs(rows - 1, c, atlVisited, 0);
        }

        const res = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (pacVisited[r][c] && atlVisited[r][c])
                    res.push([r, c]);
            }
        }

        return res;
    }
}
