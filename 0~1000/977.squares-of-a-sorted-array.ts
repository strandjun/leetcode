/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * Easy - 977. Squares of a Sorted Array
 */

// O(N + N * logN) = O(NlogN)
function sortedSquares1(nums: number[]): number[] {
    const res: number[] = []
    for (let i = 0; i < nums.length; i++) {
        res.push(nums[i] ** 2)
    }

    res.sort((a, b) => a - b)
    return res
}

// O(N)
function sortedSquares(nums: number[]): number[] {
    const res: number[] = []
    let l = 0, r = nums.length - 1;

    while (l <= r) {
        if (nums[l] ** 2 <= nums[r] ** 2) {
            res[r - l] = nums[r] ** 2
            r--
        } else {
            res[r - l] = nums[l] ** 2
            l++
        }
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(sortedSquares([-7, -3, 2, 3, 11]), [4, 9, 9, 49, 121]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(sortedSquares([-7, -4, -3, -1, 0]), [0, 1, 9, 16, 49]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(sortedSquares([-7, -4, -3, -1]), [1, 9, 16, 49]);
});
