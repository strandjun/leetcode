/**
 * https://leetcode.com/problems/climbing-stairs/
 * Easy - 70. Climbing Stairs
 * Same as 509. Fibonacci Number
 */

/**
 ** DP
 * dp(n) = dp(n-1) + d(n-2)
 * List dp(1/2/3/4/5) and derive Fibonacci
 * TC: O(2^n), SC: O(n)
 */
function climbStairs0(n: number): number {
    if (n < 4) {
        return n
    }
    return climbStairs(n - 1) + climbStairs(n - 2)
}

// Iterative TC: O(n), SC: O(1)
function climbStairs(n: number): number {
    if (n < 4) {
        return n
    }
    let a = 2 // n = 2
    let b = 3 // n = 3
    let res = 0
    while (n > 3) {
        res = a + b
        a = b
        b = res
        n--
    }
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(climbStairs(45), 1836311903);
});

Deno.test("assertEquals Test", () => {
    assertEquals(climbStairs(5), 8);
});
