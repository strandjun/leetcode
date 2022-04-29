/**
 * https://leetcode.com/problems/queries-on-a-permutation-with-key/
 * Medium    
 */

function processQueries(queries: number[], m: number): number[] {

    let mArr: number[] = []
    for (let j = 0; j < m; j++) {
        mArr.push(j + 1)
    }

    let pos = 0
    let num = queries[0]
    for (let i = 0; i < queries.length; i++) {
        num = queries[i]
        pos = mArr.indexOf(num)

        queries[i] = pos
        mArr.splice(pos, 1)
        mArr = [num, ...mArr]
    }

    return queries

}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(processQueries([3, 1, 2, 1], 5), [2, 1, 2, 1]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(processQueries([4, 1, 2, 2], 4), [3, 1, 2, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(processQueries([7, 5, 5, 8, 3], 8), [6, 5, 0, 7, 5]);
});
