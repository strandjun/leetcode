/**
 * https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/
 * Medium    
 */

function pathInZigZagTree(label: number): number[] {

    const row = Math.floor(Math.log2(label))
    const res: number[] = new Array(row + 1)

    res[row] = label
    let i = row - 1
    let num = label
    
    while (i >= 0) {
        num = Math.floor(num / 2)
        
        if (row % 2 !== i % 2) {
            res[i] = Math.pow(2, i + 1) - 1 - num + Math.pow(2, i)
        } else {
            res[i] = num
        }

        i--
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(pathInZigZagTree(14), [1, 3, 4, 14]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(pathInZigZagTree(26), [1, 2, 6, 10, 26]);
});