/**
 * https://leetcode.com/problems/maximal-square/
 * Medium    
 */

function maximalSquare(matrix: string[][]): number {
    let len = 0

    const arr: number[][] = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        arr[i] = new Array(matrix[0].length).fill(0)
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (+matrix[i][j] > 0 && i > 0 && j > 0) {
                arr[i][j] = Math.min(arr[i - 1][j - 1], arr[i - 1][j], arr[i][j - 1]) + 1
            } else {
                arr[i][j] = +matrix[i][j]
            }
            len = Math.max(len, arr[i][j])
        }
    }

    return len * len
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(maximalSquare([
        ["1", "0", "1", "0", "0"],
        ["1", "0", "1", "1", "1"],
        ["1", "1", "1", "1", "1"],
        ["1", "0", "0", "1", "0"]
    ]), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(maximalSquare([
        ["0", "1"],
        ["1", "0"]
    ]), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(maximalSquare([["0"]]), 0);
});