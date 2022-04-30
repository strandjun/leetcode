/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 * Medium - 1091. Shortest Path in Binary Matrix
 */

// TC:O(N^2)  SC:O(N^2)
function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0] !== 0) {
        return -1
    }

    const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]];
    const queue: number[][] = [[0, 0, 1]]
    const n = grid.length

    grid[0][0] = 1

    while (queue.length) {

        const [row, col, steps] = queue.shift()!

        if (row === n - 1 && col === n - 1) {
            return steps
        }

        for (let d = 0; d < dirs.length; d++) {
            const r = row + dirs[d][0]
            const c = col + dirs[d][1]

            if (r >= 0 && c >= 0 && r < n && c < n && grid[r][c] === 0) {
                // step++
                queue.push([r, c, steps + 1])
                grid[r][c] = 1
            }
        }
    }

    return -1
}

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(shortestPathBinaryMatrix([[0, 1], [1, 0]]), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(shortestPathBinaryMatrix([[0, 0, 0], [1, 1, 0], [1, 1, 0]]), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(shortestPathBinaryMatrix([[1, 0, 0], [1, 1, 0], [1, 1, 0]]), -1);
});
