/**
 * https://leetcode.com/problems/maximum-number-of-coins-you-can-get/
 * Medium    
 */

// for (let i = 0; i < arr.length; i++) {}
function maxCoins(piles: number[]): number {
    // sort the piles
    // gether the second-max number

    // descending sort
    piles.sort((a, b) => b - a)
    let max = 0

    for (let i = 0; i < (piles.length - piles.length / 3); i += 2) {
        max += piles[i + 1] || 0
    }
    return max
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(maxCoins([2, 4, 1, 2, 7, 8]), 9);
});

Deno.test("assertEquals Test", () => {
    assertEquals(maxCoins([2, 4, 5]), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]), 18);
});