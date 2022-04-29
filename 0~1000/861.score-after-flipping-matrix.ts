/**
 * https://leetcode.com/problems/score-after-flipping-matrix/
 * Medium    
 */

// O(m*2n)
function matrixScore1(grid: number[][]): number {
    let res = 0

    const m = grid.length
    const n = grid[0].length

    for (let i = 0; i < m; i++) {
        // first column
        if (grid[i][0] === 1) {
            continue
        }
        for (let j = 0; j < n; j++) {
            grid[i][j] = grid[i][j] === 0 ? 1 : 0
        }
    }
    for (let j = 1; j < n; j++) {
        let count = 0
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 1) {
                count++
            }
        }
        if (count < m - count) {
            // if 1 < 0, then flap
            for (let i = 0; i < m; i++) {
                grid[i][j] = grid[i][j] === 0 ? 1 : 0
            }
        }
    }
    for (let i = 0; i < m; i++) {
        let row = ''
        for (let j = 0; j < n; j++) {
            row += grid[i][j]
        }
        res += parseInt(row, 2)
    }

    return res

}

// 优化版 O(mn)
function matrixScore(grid: number[][]): number {
    // try toggle every column to get more 1
    let res = 0
    const m = grid.length
    const n = grid[0].length

    // the elem of first column already are 1.
    res += (1 << (n - 1)) * m

    for (let j = 1; j < n; j++) {
        let count = 0
        for (let i = 0; i < m; i++) {
            // if val = first column, then is 1, else is 0
            // this step is amazing!!
            count += grid[i][j] === grid[i][0] ? 1 : 0
        }
        res += Math.max(count, m - count) * (1 << (n - 1 - j))
    }
    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(matrixScore([[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]]), 39);
});

Deno.test("assertEquals Test", () => {
    assertEquals(matrixScore([[0]]), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(matrixScore([[0, 1], [0, 1], [0, 1], [0, 0]]), 11);
});
