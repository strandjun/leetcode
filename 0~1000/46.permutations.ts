/**
 * https://leetcode.com/problems/permutations/
 * Medium - 46. Permutations
 */

/**
 * Q:
 *  1. Is it possible the input contains 2 identical nums?
 *  2. Can the input be empty or null?
 */

// Time Complexity: O(), Space Complexity: O()
// backtracking
function permute1(nums: number[]): number[][] {
    const res: number[][] = []
    const backtracking = (res: number[][], curr: number[], remain: number[]) => {
        if (curr.length === nums.length) {
            res.push([...curr])
            return
        }
        for (let i = 0; i < remain.length; i++) {
            curr.push(remain[i])
            backtracking(res, curr, remain.slice(0, i).concat(remain.slice(i + 1)))
            curr.pop()
        }
    }

    backtracking(res, [], nums)
    return res
}

// Time Complexity: O(), Space Complexity: O()
// dp
function permute(nums: number[]): number[][] {
    const res: number[][] = [[nums[0]]]
    for (let i = 1; i < nums.length; i++) {
        const size = res.length
        for (let j = 0; j < size; j++) {
            let len = res[j].length - 1
            const cur = res[j].slice()
            while (len >= 0) {
                res.push(cur.slice(0, len).concat([nums[i]]).concat(cur.slice(len)))
                len--
            }
            res[j].push(nums[i])
        }
    }
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        permute([1, 2, 3]),
        [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(permute([0, 1]), [[0, 1], [1, 0]]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(permute([1]), [[1]]);
});
