/**
 * https://leetcode.com/problems/permutations/
 * Medium - 47. Permutations II
 */

/**
 * Q:
 *  1. Is it possible the input contains 2 identical nums?
 *  2. Can the input be empty or null?
 */

// Time Complexity: O(), Space Complexity: O()
// backtracking
function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = []
    nums.sort((a, b) => a - b)

    const backtracking = (res: number[][], curr: number[], remain: number[]) => {
        if (curr.length === nums.length) {
            res.push([...curr])
            return
        }
        for (let i = 0; i < remain.length; i++) {
            if ((i - 1 >= 0) && remain[i] === remain[i - 1]) {
                continue
            }
            curr.push(remain[i])
            backtracking(res, curr, remain.slice(0, i).concat(remain.slice(i + 1)))
            curr.pop()
        }
    }

    backtracking(res, [], nums)
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        permuteUnique([1, 1, 2]),
        [
            [1, 1, 2],
            [1, 2, 1],
            [2, 1, 1]
        ]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        permuteUnique([1, 2, 3]),
        [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1]
        ]
    );
});
