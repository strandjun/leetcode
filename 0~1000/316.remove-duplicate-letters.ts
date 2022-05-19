/**
 * https://leetcode.com/problems/remove-duplicate-letters/
 * Medium - 316. Remove Duplicate Letters
 * 
 * Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/
 */

/**
 * Steps:
 * find the index of each element last occurrence (last array)
 * check if the last element smaller than the current character: (stack)
 *     if yes, continue
 *     if no , pop the last element, push the current one. (change seen array)
 * keep track the new element with a seen array
 * 
 * From lee215
 */

// TC:O(N)  SC:O(26)
function removeDuplicateLetters(s: string): string {

    const last = new Array(26).fill(-1)
    const codeA = 'a'.charCodeAt(0)
    // last occurrence index
    for (let i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - codeA] = i
    }

    const seen = new Array(26).fill(0) // keep track of new char
    const stack: number[] = [] // for result
    for (let i = 0; i < s.length; i++) {
        const cur = s.charCodeAt(i) - codeA
        if (seen[cur]++ > 0) {
            continue
        }

        /**
         * check stack element smaller than cur or not
         * if stack already have some element
         * and the last one bigger than current
         * and the last one will occur in the following
         * then pop out the last one
         */
        while (stack.length && stack[stack.length - 1] > cur && last[stack[stack.length - 1]] > i) {
            seen[stack.pop() || 0] = 0
        }
        stack.push(cur)
    }

    let res = ""
    // combine the stack for res
    for (let i = 0; i < stack.length; i++) {
        res += String.fromCharCode(stack[i] + codeA)
    }

    return res
};

import { assertEquals } from "https://deno.land/std@0.137.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(removeDuplicateLetters("bcabc"), "abc");
});

Deno.test("assertEquals Test", () => {
    assertEquals(removeDuplicateLetters("ecbacba"), "eacb");
});

Deno.test("assertEquals Test", () => {
    assertEquals(removeDuplicateLetters("cbacdcbc"), "acdb");
});
