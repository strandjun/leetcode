/**
 * https://leetcode.com/problems/combination-sum/
 * Medium - 39. Combination Sum
 */

/**
 * Q:
 *  1. sort?
 */

// Time Complexity: O(), Space Complexity: O()
// backtracking
function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = []
    candidates.sort((a, b) => a - b)

    const backtracking = (
        res: number[][],
        curr: number[],
        candidates: number[],
        target: number,
        idx: number
    ) => {
        if (target < 0) {
            return
        }
        if (target === 0) {
            res.push([...curr])
            return
        }
        for (let i = idx; i < candidates.length; i++) {
            curr.push(candidates[i])
            backtracking(res, curr, candidates, target - candidates[i], i)
            curr.pop()
        }
    }
    backtracking(res, [], candidates, target, 0)
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        combinationSum([8, 2, 3, 6, 7], 7),
        [[2, 2, 3], [7]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        combinationSum([2, 3, 5], 8),
        [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        combinationSum([2], 1),
        []
    );
});
