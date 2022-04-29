/**
 * https://leetcode.com/problems/letter-case-permutation/
 * Medium - 784. Letter Case Permutation
 */

/**
 * Q:
 *  1. What is the size of input?
 *  2. What does input consist of?
 *  3. Do we have runtime or space limit?
 */

/**
 * Strategy:
 *  Brute force: 
 */

// Time Complexity: O(2^n), Space Complexity: O(2^n) for output
// dfs/backtracking/recursion
function letterCasePermutationDFS(s: string): string[] {
    const res: string[] = []
    const recursion = (s: string, sub: string, idx: number, res: string[]) => {
        if (idx == s.length) {
            res.push(sub)
            return
        }
        const cur = s.charAt(idx)
        if (/[a-zA-Z]/i.test(cur)) {
            recursion(s, sub + cur.toLowerCase(), idx + 1, res)
            recursion(s, sub + cur.toUpperCase(), idx + 1, res)
        } else {
            recursion(s, sub + cur, idx + 1, res)
        }
    }

    recursion(s, "", 0, res)
    return res
}

// Time Complexity: O(n * m), Space Complexity: O(n)
// bfs
function letterCasePermutation(s: string): string[] {
    const res: string[] = [s]

    for (let i = 0; i < s.length; i++) {
        if (!/[a-zA-Z]/i.test(s.charAt(i))) {
            continue
        }
        const curLen = res.length
        for (let j = 0; j < curLen; j++) {
            const cur = res[j].split('')

            cur[i] = cur[i].toLowerCase()
            res[j] = cur.join('')

            cur[i] = cur[i].toUpperCase()
            res.push(cur.join(''))
        }
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(letterCasePermutation("RmR"), ["rmr", "rmR", "rMr", "rMR", "Rmr", "RmR", "RMr", "RMR"]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(letterCasePermutation("a1b2"), ["a1b2", "a1B2", "A1b2", "A1B2"]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(letterCasePermutation("3z4"), ["3z4", "3Z4"]);
});
