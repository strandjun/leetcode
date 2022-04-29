/**
 * https://leetcode.com/problems/spiral-matrix-ii/
 * Medium - 59. Spiral Matrix II
 */

function generateMatrix(n: number): number[][] {
    const res: number[][] = new Array(n)
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n).fill(0)
    }

    let rowBegin = 0, rowEnd = n - 1, colBegin = 0, colEnd = n - 1;
    let count = 1
    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // right
        if (colBegin <= colEnd) {
            for (let j = colBegin; j <= colEnd; j++) {
                res[rowBegin][j] = count
                count++
            }
        }
        rowBegin++

        // down
        if (rowBegin <= rowEnd) {
            for (let i = rowBegin; i <= rowEnd; i++) {
                res[i][colEnd] = count
                count++
            }
        }
        colEnd--

        // left
        if (colBegin <= colEnd) {
            for (let j = colEnd; j >= colBegin; j--) {
                res[rowEnd][j] = count
                count++
            }
        }
        rowEnd--

        // up
        if (rowBegin <= rowEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res[i][colBegin] = count
                count++
            }
        }
        colBegin++
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        generateMatrix(3),
        [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        generateMatrix(1),
        [[1]]
    );
});
