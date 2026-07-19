class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {

        const adjList = new Map();
        for (let i = 0; i < numCourses; i++)
            adjList.set(i, []);
        for (const [course, prereq] of prerequisites)
            adjList.get(course).push(prereq);

        const visiting = new Set();
        const visited = new Set();

        const dfs = (course) => {
            if (visiting.has(course))
                return false;
            
            if (visited.has(course))
                return true;
            
            visiting.add(course);

            const neighbors = adjList.get(course);

            for (const neighbor of neighbors) {
                if (!dfs(neighbor))
                    return false;
            }

            visiting.delete(course);
            visited.add(course);
            return true;
        }

        for (let course = 0; course < numCourses; course++) {
            if (!dfs(course))
                return false;
        }
        return true;
    }
}
