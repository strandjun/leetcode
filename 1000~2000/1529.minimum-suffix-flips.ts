/**
 * https://leetcode.com/problems/minimum-suffix-flips/
 * Medium
 */

function minFlips(target: string): number {
    let cur = '0'
    let count = 0

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== cur) {
            count++
            cur = target[i]
        }
    }

    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minFlips("10111"), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minFlips("101"), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minFlips("00000"), 0);
});
