/**
 * https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/
 * Hard - 828. Count Unique Characters of All Substrings of a Given String
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
// Time limit Exceeded
function uniqueLetterString1(s: string): number {
    const countUniqueChars = (t: string): number => {
        const map = new Map()
        let count = 0
        for (let i = 0; i < t.length; i++) {
            if (map.has(t[i])) {
                count -= map.get(t[i])
                map.set(t[i], 0)
            } else {
                map.set(t[i], 1)
                count++
            }
        }
        return count
    }

    const getSubsequence = (s: string, len: number): number => {
        let count = 0
        for (let i = 0; i < s.length - len + 1; i++) {
            count += countUniqueChars(s.slice(i, i + len))
        }
        return count
    }

    let res = 0
    res += s.length
    for (let len = 2; len < s.length + 1; len++) {
        res += getSubsequence(s, len)
    }
    return res
}

// from lee215
function uniqueLetterString(s: string): number {
    const index: number[][] = new Array(26)
    for (let i = 0; i < 26; i++) {
        index[i] = new Array(2).fill(-1)
    }

    let res = 0
    const N = s.length
    // const mod = Math.pow(10, 9) + 7

    for (let i = 0; i < N; i++) {
        const c = s.charCodeAt(i) - 'A'.charCodeAt(0)
        res = res + (i - index[c][1]) * (index[c][1] - index[c][0])
        index[c] = [index[c][1], i]
    }

    for (let c = 0; c < 26; c++) {
        res = res + (N - index[c][1]) * (index[c][1] - index[c][0])
    }

    return res;
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(uniqueLetterString("XXXAXXAXXAX"), 41);
});

Deno.test("assertEquals Test", () => {
    assertEquals(uniqueLetterString("LEETCODE"), 92);
});

Deno.test("assertEquals Test", () => {
    assertEquals(uniqueLetterString("ABC"), 10);
});

Deno.test("assertEquals Test", () => {
    assertEquals(uniqueLetterString("ABA"), 8);
});
