/**
 * https://leetcode.com/problems/fibonacci-number/
 * Easy - 509. Fibonacci Number
 * Same as 70. Climbing Stairs
 */

/**
 * Recursive
 * TC: O(2^n) - since T(n) = T(n-1) + T(n-2)is an exponential time
 * SC: O(n)   - space for recursive function call stack
 */
function fib0(n: number): number {
    if (n <= 1) {
        return n
    }

    return fib(n - 1) + fib(n - 2)
}

/**
 * Iterative
 * TC: O(n)
 * SC: O(n)
 */
function fib1(n: number): number {
    if (n <= 1) {
        return n
    }

    const fib_cache = new Array(n + 1).fill(0)
    fib_cache[1] = 1
    for (let i = 2; i <= n; i++) {
        fib_cache[i] = fib_cache[i - 1] + fib_cache[i - 2]
    }
    return fib_cache[n]
}

/**
 * Iterative
 * TC: O(n)
 * SC: O(1)
 */
function fib(n: number): number {
    if (n <= 1) {
        return n
    }

    let a = 0, b = 1
    let res = 0
    while (n > 1) {
        res = b + a
        a = b
        b = res
        n--
    }
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(fib(2), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(fib(3), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(fib(4), 3);
});
