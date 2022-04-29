/**
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 * Medium - 442. Find All Duplicates in an Array
 */

/**
 * Q:
 *  1. Is the list sorted randomly?
 */

/**
 * Strategy:
 *  Brute force: use Set
 *  Smart approach: use n 
 */

// Time Complexity: O(n), Space Complexity:O(m + n)
function findDuplicates1(nums: number[]): number[] {
    const res: number[] = []
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            res.push(nums[i])
        } else {
            set.add(nums[i])
        }
    }
    return res
}

// Time Complexity: O(n), Space Complexity:O(n)
function findDuplicates(nums: number[]): number[] {
    const res: number[] = []
    for (let i = 0; i < nums.length; i++) {
        const cur = Math.abs(nums[i]) - 1
        if (nums[cur] > 0) {
            nums[cur] = -1 * nums[cur]
        } else {
            res.push(Math.abs(nums[i]))
        }
    }
    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [2, 3]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findDuplicates([1, 1, 2]), [1]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findDuplicates([1]), []);
});
