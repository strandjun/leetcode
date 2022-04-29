/**
 * https://leetcode.com/problems/matrix-block-sum/
 * Medium    
 */

/**
 * brute force
 * Time: O(m * n * m * n)
 * Space: O(m * n)
 */
function matrixBlockSum1(mat: number[][], k: number): number[][] {
    const res: number[][] = new Array(mat.length)
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(mat[0].length).fill(0)
    }

    const calc = (r: number, c: number) => {
        let acc = 0
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (i - k <= r && r <= i + k && j - k <= c && c <= j + k) {
                    acc += mat[i][j]
                }
            }
        }
        return acc
    }

    for (let r = 0; r < res.length; r++) {
        for (let c = 0; c < res[0].length; c++) {
            res[r][c] = calc(r, c)
        }
    }

    return res
}

/**
 * optimized version
 * Time: O(m * n * m * n)
 * Space: O(m * n)
 */
function matrixBlockSum2(mat: number[][], k: number): number[][] {
    const rowLen = mat.length
    const colLen = mat[0].length

    const res: number[][] = new Array(rowLen)
    for (let i = 0; i < res.length; i++) {
        res[i] = new Array(colLen).fill(0)
    }

    const getRange = (r: number, c: number) => {
        return {
            row: [r - k >= 0 ? r - k : 0, r + k <= rowLen - 1 ? r + k : rowLen - 1],
            col: [c - k >= 0 ? c - k : 0, c + k <= colLen - 1 ? c + k : colLen - 1]
        }
    }
    const calc = ({ row, col }: { row: number[], col: number[] }) => {
        if (row[0] < 0 || row[1] > rowLen - 1 || col[0] < 0 || col[1] > colLen - 1) {
            return 0
        }
        let acc = 0
        for (let i = row[0]; i <= row[1]; i++) {
            for (let j = col[0]; j <= col[1]; j++) {
                acc += mat[i][j]
            }
        }
        return acc
    }

    res[0][0] = calc(getRange(0, 0))

    for (let c = 1; c < colLen; c++) {
        // get the first row sum value
        const row: number[] = getRange(0, 0).row

        res[0][c] = res[0][c - 1] + calc({ row, col: [c + k, c + k] }) - calc({ row, col: [c - 1 - k, c - 1 - k] })
    }

    for (let r = 1; r < rowLen; r++) {
        for (let c = 0; c < colLen; c++) {
            const col: number[] = getRange(r, c).col

            res[r][c] = res[r - 1][c] + calc({ row: [r + k, r + k], col }) - calc({ row: [r - 1 - k, r - 1 - k], col })
        }
    }
    return res
}

/**
 * learn from discuss
 * Time & Space: O(m * n)
 */
function matrixBlockSum(mat: number[][], k: number): number[][] {
    const m: number = mat.length, n: number = mat[0].length;

    const rangeSum: number[][] = new Array(m + 1)
    for (let i = 0; i < m + 1; i++) {
        rangeSum[i] = new Array(n + 1).fill(0)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rangeSum[i + 1][j + 1] = rangeSum[i + 1][j] + rangeSum[i][j + 1] - rangeSum[i][j] + mat[i][j];
        }
    }

    const ans: number[][] = new Array(m)
    for (let i = 0; i < m; i++) {
        ans[i] = new Array(n).fill(0)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const r1 = Math.max(0, i - k),
                c1 = Math.max(0, j - k),
                r2 = Math.min(m, i + k + 1),
                c2 = Math.min(n, j + k + 1);

            ans[i][j] = rangeSum[r2][c2] - rangeSum[r2][c1] - rangeSum[r1][c2] + rangeSum[r1][c1];
        }
    }
    return ans
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 1),
        [[12, 21, 16], [27, 45, 33], [24, 39, 28]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(matrixBlockSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 2), [[45, 45, 45], [45, 45, 45], [45, 45, 45]]);
});
