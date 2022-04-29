/**
 * https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
 * Medium    
 */

function minAddToMakeValid(s: string): number {
    let left = 0
    let right = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left += 1
        }
        if (s[i] === ')') {
            if (left > 0) {
                left -= 1
            } else {
                right += 1
            }
        }
    }
    return left + right
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minAddToMakeValid('())'), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minAddToMakeValid('((('), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minAddToMakeValid("()))(("), 4);
});