/**
 * https://leetcode.com/problems/spiral-matrix/
 * Medium - 54. Spiral Matrix
 */

// O(mn)
function spiralOrder1(matrix: number[][]): number[] {
    const r = matrix.length
    const c = matrix[0].length

    const dirction = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    const res: number[] = new Array(r * c).fill(0)
    let m = 0
    let n = 0
    let d = 0
    for (let i = 0; i < r * c; i++) {
        res[i] = matrix[m][n]
        matrix[m][n] = -1000

        m += dirction[d][0]
        n += dirction[d][1]
        if (m < 0 || m >= r || n < 0 || n >= c || matrix[m][n] === -1000) {
            m -= dirction[d][0]
            n -= dirction[d][1]
            d = (d + 1) % 4
            m += dirction[d][0]
            n += dirction[d][1]
        }
    }

    return res
}


// more direct approach
function spiralOrder(matrix: number[][]): number[] {
    const res: number[] = []
    let rowBegin = 0, rowEnd = matrix.length - 1, colBegin = 0, colEnd = matrix[0].length - 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        // right
        if (rowBegin <= rowEnd) {
            for (let j = colBegin; j <= colEnd; j++) {
                res.push(matrix[rowBegin][j])
            }
        }
        rowBegin++

        // down
        if (colBegin <= colEnd) {
            for (let i = rowBegin; i <= rowEnd; i++) {
                res.push(matrix[i][colEnd])
            }
        }
        colEnd--

        // left
        if (rowBegin <= rowEnd) {
            for (let j = colEnd; j >= colBegin; j--) {
                res.push(matrix[rowEnd][j])
            }
        }
        rowEnd--

        // up
        if (colBegin <= colEnd) {
            for (let i = rowEnd; i >= rowBegin; i--) {
                res.push(matrix[i][colBegin])
            }
        }
        colBegin++
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        spiralOrder([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]),
        [1, 2, 3, 6, 9, 8, 7, 4, 5]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        spiralOrder([
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
        ]),
        [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    );
});
