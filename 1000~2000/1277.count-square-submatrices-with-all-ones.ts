/**
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 * Medium   
 */

/**
 * 参考 1314. Matrix Block Sum二维数组计算prefix sum的方法做出的
 * https://leetcode.com/problems/matrix-block-sum/discuss/477036/JavaPython-3-PrefixRange-sum-w-analysis-similar-to-LC-30478
 * Time: O(N^3)
 */
function countSquares1(matrix: number[][]): number {
    let count = 0

    const row = matrix.length
    const col = matrix[0].length
    const sum = new Array(row)
    for (let i = 0; i < row + 1; i++) {
        sum[i] = new Array(col + 1).fill(0)
    }
    // get prefix sum
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                count++
            }
            sum[i + 1][j + 1] = sum[i][j + 1] + sum[i + 1][j] - sum[i][j] + matrix[i][j]
        }
    }

    const max = Math.min(row, col)

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            for (let dis = 1; dis < max; dis++) {
                if (i + dis < row + 1 && j + dis < col + 1) {
                    const area = sum[i + dis][j + dis] - sum[i - 1][j + dis] - sum[i + dis][j - 1] + sum[i - 1][j - 1]
                    // console.log(`i: ${i}, j: ${j}, area: ${area}`)
                    if (area === (dis + 1) * (dis + 1)) {
                        count++
                    }
                }
            }
        }
    }

    return count
}

/**
 * Learn from lee215, DP solution
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/discuss/441306/JavaC%2B%2BPython-DP-solution
 * Time O(MN)
 * Space O(1)
 */
function countSquares(matrix: number[][]): number {
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] > 0 && i > 0 && j > 0) {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1
            }
            count += matrix[i][j]
        }
    }

    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(countSquares([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 1, 1, 1]
    ]), 15);
});

Deno.test("assertEquals Test", () => {
    assertEquals(countSquares([
        [1, 0, 1],
        [1, 1, 0],
        [1, 1, 0]
    ]), 7);
});
