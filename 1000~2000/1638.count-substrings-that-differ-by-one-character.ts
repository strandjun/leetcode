/**
 * https://leetcode.com/problems/count-substrings-that-differ-by-one-character/
 * Medium - 1638. Count Substrings That Differ by One Character
 */

/**
 * Q:
 *  1. 
 *  2. 
 */

/**
 * Strategy:
 *  Brute force: 
 */

// for (let i = 0; i < arr.length; i++) {}
// Time Complexity: O(), Space Complexity: O()
function countSubstrings1(s: string, t: string): number {
    let len = Math.min(s.length, t.length)
    let res = 0

    const isDiffByOneChar = (a: string, b: string): boolean => {
        if (a.length === 0 || b.length === 0 || a.length !== b.length) {
            return false
        }
        let len = a.length - 1
        let count = 0
        while (len >= 0) {
            if (a.charAt(len) !== b.charAt(len)) {
                count++
            }
            len--
        }
        return count === 1
    }
    const generateSeq = (str: string, len: number): Map<string, number> => {
        const map = new Map<string, number>()
        for (let i = 0; i <= str.length - len; i++) {
            const cur = str.substring(i, i + len)
            map.set(cur, (map.get(cur) || 0) + 1)
        }
        return map
    }
    const compareSeq = (sMap: Map<string, number>, tMap: Map<string, number>): number => {
        let count = 0
        for (const [sSub, sCount] of sMap) {
            for (const [tSub, tCount] of tMap) {
                if (sSub === tSub) {
                    continue
                }
                if (isDiffByOneChar(sSub, tSub)) {
                    count += sCount * tCount
                }
            }
        }
        return count
    }

    while (len > 0) {
        const sMap: Map<string, number> = generateSeq(s, len)
        const tMap: Map<string, number> = generateSeq(t, len)
        res += compareSeq(sMap, tMap)
        len--
    }

    return res
}


// don't understand at all!!!
const helper = (s: string, t: string, i: number, j: number) => {
    let res = 0, pre = 0, cur = 0;
    for (const n = s.length, m = t.length; i < n && j < m; ++i, ++j) {
        cur++;
        if (s.charAt(i) != t.charAt(j)) {
            pre = cur;
            cur = 0;
        }
        res += pre;
    }
    return res
}
function countSubstrings(s: string, t: string): number {
    let res = 0
    for (let i = 0; i < s.length; ++i) {
        res += helper(s, t, i, 0)
    }
    for (let j = 1; j < t.length; ++j) {
        res += helper(s, t, 0, j)
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(countSubstrings("abe", "bbc"), 10);
});

// Deno.test("assertEquals Test", () => {
//     assertEquals(countSubstrings("ab", "bb"), 3);
// });

// Deno.test("assertEquals Test", () => {
//     assertEquals(countSubstrings("aba", "baba"), 6);
// });
