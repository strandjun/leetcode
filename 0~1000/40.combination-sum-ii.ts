/**
 * https://leetcode.com/problems/combination-sum-ii/
 * Medium - 40. Combination Sum II
 */

/**
 * Q:
 *  1. sort?
 *  2. positive number? integer?
 */

// Time Complexity: O(), Space Complexity: O()
// backtracking
function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    candidates.sort((a, b) => a - b)

    const backtracking = (
        res: number[][],
        cands: number[],
        curr: number[],
        target: number,
        idx: number
    ) => {
        if (target === 0) {
            res.push([...curr])
            return
        }
        if (target < 0) {
            return
        }
        for (let i = idx; i < cands.length; i++) {
            if (i > idx && cands[i] === cands[i - 1]) {
                continue
            }
            curr.push(cands[i])
            backtracking(res, cands, curr, target - cands[i], i + 1)
            curr.pop()
        }
    }

    backtracking(res, candidates, [], target, 0)
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        combinationSum2([10, 1, 2, 7, 6, 1, 5], 8),
        [
            [1, 1, 6],
            [1, 2, 5],
            [1, 7],
            [2, 6]
        ]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        combinationSum2([2, 5, 2, 1, 2], 5),
        [[1, 2, 2], [5]]
    );
});
