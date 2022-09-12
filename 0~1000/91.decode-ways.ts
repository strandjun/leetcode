/**
 * https://leetcode.com/problems/decode-ways/
 * Medium - 91. Decode Ways
 */

/**
 * recursion
 * TC: O(2^n), SC: O(2^n)
 */
function numDecodings0(s: string): number {
    if (s.length == 0) {
        return 0
    }
    const len = s.length
    const recur = (idx: number, s: string): number => {
        if (idx == s.length) {
            return 1
        }

        if (s.charAt(idx) == '0') {
            return 0
        }

        let res = recur(idx + 1, s)
        if (idx < len - 1
            && (s.charAt(idx) == '1' || (s.charAt(idx) == '2' && s.charAt(idx + 1) < '7'))) {
            res += recur(idx + 2, s)
        }
        return res
    }
    return recur(0, s)
}

/**
 * recursion with memoization
 * TC: O(n), SC: O(n)
 */
function numDecodings1(s: string): number {
    const len = s.length
    if (len == 0) {
        return 0
    }
    const mem = new Array(len + 1).fill(-1)
    mem[len] = 1
    const recur = (idx: number, s: string): number => {
        if (mem[idx] > -1) {
            return mem[idx]
        }

        if (s.charAt(idx) == '0') {
            mem[idx] = 0
            return mem[idx]
        }

        let res = recur(idx + 1, s)
        if (idx < len - 1
            && (s.charAt(idx) == '1' || (s.charAt(idx) == '2' && s.charAt(idx + 1) < '7'))) {
            res += recur(idx + 2, s)
        }
        mem[idx] = res
        return mem[idx]
    }
    return recur(0, s)
}

/**
 * DP
 * TC: O(n), SC: O(n)
 */
function numDecodings3(s: string): number {
    const len = s.length
    if (len == 0) {
        return 0
    }
    const dp = new Array(len + 1).fill(0)
    dp[len] = 1

    for (let i = len - 1; i >= 0; i--) {
        if (s.charAt(i) != '0') {
            dp[i] = dp[i + 1]

            if (i < len - 1 &&
                (s.charAt(i) == '1' || (s.charAt(i) == '2' && s.charAt(i + 1) < '7'))
            ) {
                dp[i] += dp[i + 2]
            }
        }
    }

    return dp[0]
}

/**
 * DP
 * TC: O(n), SC: O(1)
 */
function numDecodings(s: string): number {
    const len = s.length
    if (len == 0) {
        return 0
    }
    let dp1 = 1, dp2 = 0;

    for (let i = len - 1; i >= 0; i--) {
        let dp = s.charAt(i) == '0' ? 0 : dp1
        if (i < len - 1 &&
            (s.charAt(i) == '1' || (s.charAt(i) == '2' && s.charAt(i + 1) < '7'))
        ) {
            dp += dp2
        }
        dp2 = dp1
        dp1 = dp
    }

    return dp1
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(numDecodings("12"), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numDecodings("226"), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numDecodings("06"), 0);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numDecodings("11106"), 2);
});

Deno.test("x assertEquals Test", () => {
    // recursion: Time Limit Exceeded
    assertEquals(numDecodings("111111111111111111111111111111111111111111111"), 1836311903);
});
