/**
 * https://leetcode.com/problems/count-sorted-vowel-strings/
 * Medium    
 */

// backtracking
function countVowelStrings(n: number): number {
    // const vowelsVal = {
    //     'a': 0,
    //     'e': 1,
    //     'i': 2,
    //     'o': 3,
    //     'u': 4
    // }

    const count = (num: number, lc: number) => {
        if (num === 1) {
            return 5 - lc
        }
        let cur = 0
        for (let i = lc; i < 5; i++) {
            cur += count(num - 1, i)
        }
        return cur
    }

    return count(n, 0)
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(countVowelStrings(1), 5);
});

Deno.test("assertEquals Test", () => {
    assertEquals(countVowelStrings(2), 15);
});

Deno.test("assertEquals Test", () => {
    assertEquals(countVowelStrings(33), 66045);
});
