/**
 * https://leetcode.com/problems/maximum-xor-for-each-query/
 * Medium    
 */


function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const res = new Array(nums.length)

    let tmp = Math.pow(2, maximumBit) - 1

    for (let j = 0; j < nums.length; j++) {
        tmp ^= nums[j]
        res[nums.length - 1 - j] = tmp
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(getMaximumXor([0, 1, 1, 3], 2), [0, 3, 2, 3]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(getMaximumXor([2, 3, 4, 7], 3), [5, 2, 6, 5]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(getMaximumXor([0, 1, 2, 2, 5, 7], 3), [4, 3, 6, 4, 6, 7]);
});
