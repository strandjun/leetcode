/**
 * https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 * Medium - 1081. Smallest Subsequence of Distinct Characters
 * 
 * Note: This question is the same as 316: https://leetcode.com/problems/remove-duplicate-letters/
 */

/**
 * Steps:
 * Find the index of last occurrence for each character.
 * Use a stack to keep the characters for result.
 * Loop on each character in the input string S,
 * if the current character is smaller than the last character in the stack,
 * and the last character exists in the following stream,
 * we can pop the last character to get a smaller result.
 * 
 * From lee215
 */


// TC:O(N)  SC:O(26)
function smallestSubsequence(s: string): string {
    let res = ''

    const last = new Array(26).fill(-1)  // the index of last occurrence for each character
    const seen = new Array(26).fill(0)   // keep track new character
    const stack: number[] = []           // keep the characters for result
    const first = 'a'.charCodeAt(0)      // 97

    for (let l = 0; l < s.length; l++) {
        last[s.charCodeAt(l) - first] = l
    }

    for (let i = 0; i < s.length; i++) {
        const cur = s.charCodeAt(i) - first
        if (seen[cur]++ > 0) {
            continue
        }

        while (stack.length && stack[stack.length - 1] > cur && i < last[stack[stack.length - 1]]) {
            seen[stack.pop() || 0] = 0
        }
        stack.push(cur)
    }

    for (let k = 0; k < stack.length; k++) {
        res += String.fromCharCode(stack[k] + first)
    }

    return res
};

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(smallestSubsequence("bcabc"), "abc");
});

Deno.test("assertEquals Test", () => {
    assertEquals(smallestSubsequence("ecbacba"), "eacb");
});

Deno.test("assertEquals Test", () => {
    assertEquals(smallestSubsequence("cbacdcbc"), "acdb");
});
