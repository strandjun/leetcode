/**
 * https://leetcode.com/problems/spiral-matrix-iii/
 * Medium - 885. Spiral Matrix III
 */

/**
 * sequence of steps: 1,1,2,2,3,3,4,4,5,5....
 * Let n be index of this sequence, then An = n / 2 + 1
 */
function spiralMatrixIII(rows: number, cols: number, rStart: number, cStart: number): number[][] {
    const res: number[][] = [[rStart, cStart]]

    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let steps = 0
    let n = 0
    let count = 0

    let r = rStart
    let c = cStart

    for (let i = 1; i < rows * cols; i += count) {

        steps = Math.floor(n / 2) + 1
        count = 0
        while (steps > 0) {
            r += direction[n % 4][0]
            c += direction[n % 4][1]
            if (r < rows && r >= 0 && c < cols && c >= 0) {
                res.push([r, c])
                count++
            }
            steps--
        }
        n++
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        spiralMatrixIII(1, 4, 0, 0),
        [[0, 0], [0, 1], [0, 2], [0, 3]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        spiralMatrixIII(5, 6, 1, 4),
        [
            [1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [1, 3], [0, 3], [0, 4], [0, 5], [3, 5],
            [3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [0, 2], [4, 5], [4, 4], [4, 3], [4, 2],
            [4, 1], [3, 1], [2, 1], [1, 1], [0, 1], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]
        ]
    );
});
