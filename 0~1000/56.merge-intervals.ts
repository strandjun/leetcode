/**
 * https://leetcode.com/problems/merge-intervals/
 * Medium - 56. Merge Intervals
 */


// TC: O(NlogN), SC: O(N)
function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0])

    let res = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const [resS, resE] = res[res.length - 1]
        const [curS, curE] = intervals[i]
        if (curS <= resE) {
            res[res.length - 1] = [Math.min(resS, curS), Math.max(resE, curE)]
        } else {
            res.push(intervals[i])
        }
    }
    return res
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(merge([[1, 3], [2, 6], [8, 10], [15, 18]]), [[1, 6], [8, 10], [15, 18]]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(merge([[1, 4], [4, 5]]), [[1, 5]]);
});
