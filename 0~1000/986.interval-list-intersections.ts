/**
 * https://leetcode.com/problems/interval-list-intersections/
 * Medium - 986. Interval List Intersections
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
function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    const res: number[][] = [];

    for (let p1 = 0, p2 = 0; p1 < firstList.length && p2 < secondList.length;) {
        const [s1, e1] = firstList[p1];
        const [s2, e2] = secondList[p2];

        const [s, e] = [Math.max(s1, s2), Math.min(e1, e2)]
        if (s <= e) {
            res.push([s, e])
        }
        if (e1 < e2) {
            p1++
        } else {
            p2++
        }
    }

    // console.log('res: ', res)
    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        intervalIntersection(
            [[0, 2], [5, 10], [13, 23], [24, 25]],
            [[1, 5], [8, 12], [15, 24], [25, 26]]
        ),
        [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(intervalIntersection([[1, 3], [5, 9]], []), []);
});
