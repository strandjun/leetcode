/**
 * https://leetcode.com/problems/minimum-window-substring/
 * Hard - 76. Minimum Window Substring
 * 
 * Follow up: Could you find an algorithm that runs in O(m + n) time?
 */

/**
 * steps:
 * set 2 maps for t, one is goal map counter, another is for s char counter
 * 2 pointers for s, sliding window, find the smallest substring
 * 
 * iterate s, use sw to find all the substring
 */

// TC: O(m+n), SC: O(2n), m = s.length, n = t.length
function minWindow(s: string, t: string): string {
    if (s.length < t.length || s.length === 0 || t.length === 0) {
        return ""
    }

    let res = ""
    const map = new Map<string, number>() // store char counter for substring
    const goal = new Map<string, number>() // store goal of each char counter
    let charCounter = 0 // for the length of unique chars
    let head = 0

    // map all chars from t
    for (let j = 0; j < t.length; j++) {
        const char = t.charAt(j)
        goal.set(char, (goal.get(char) || 0) + 1)
        map.set(char, 0)
    }

    for (let tail = 0; tail < s.length; tail++) {

        const curChar = s.charAt(tail)

        if (!goal.has(curChar)) {
            continue
        }

        const num = (map.get(curChar) || 0) + 1
        const goalNum = goal.get(curChar)
        if (num === goalNum) {
            charCounter++
        }
        map.set(curChar, num)

        while (charCounter === goal.size) {
            // find all the chars [head, tail]
            if (tail - head + 1 === t.length) {
                // find the smallest one (also with slice)
                return s.substring(head, tail + 1)
            }
            if (res.length === 0 || tail - head + 1 < res.length) {
                // replace res
                res = s.substring(head, tail + 1)
            }
            const curHeadChar = s.charAt(head)
            if (goal.has(curHeadChar)) {
                const headCounter = (map.get(curHeadChar) || 0) - 1
                const headGoalCounter = goal.get(curHeadChar) || 0

                if (headCounter < headGoalCounter) {
                    charCounter--
                }
                map.set(curHeadChar, headCounter)
                head++
            } else {
                head++
            }
        }
    }

    return res
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("ADOBECODEBANC", "ABC"), "BANC");
});

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("aa", "aa"), "aa");
});

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("a", "a"), "a");
});

Deno.test("assertEquals Test", () => {
    assertEquals(minWindow("a", "aa"), "");
});
