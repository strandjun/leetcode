/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
 * Medium 81. Search in Rotated Sorted Array II
 */

// Brute Force, TC: O(N), SC: O(1)
function search0(nums: number[], target: number): boolean {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true
        }
    }

    return false
};

// Tricky Brute Force, TC: O(N/2), SC: O(1)
function search1(nums: number[], target: number): boolean {
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        if (nums[start] == target || nums[end] == target) {
            return true;
        }
        start++
        end--
    }

    return false
};

/**
 * example1:
 *        F | S
 * [2, 5, 6,  0, 0, 1, 2]
 *            m
 * 
 * example2:
 *     F | S
 * [1, 2,  0, 1, 1, 1, 1]
 *            m (nums[mid] === nums[start] === nums[end])
 */

// binary search
function search(nums: number[], target: number): boolean {
    /**
     * steps:
     * -> if mid = start = end, then start++, end--
     * -> if start <= mid (end != start, hence start <= mid)
     * -> else start > mid (right part is S)
     */

    let s = 0
    let e = nums.length - 1
    let mid = 0

    while (s <= e) {
        mid = Math.floor((s + e) / 2)
        if (nums[mid] === target) {
            return true
        }
        if (nums[s] === nums[mid] && nums[mid] === nums[e]) {
            s++
            e--
        } else if (nums[s] <= nums[mid]) {
            // we can make sure [s, mid - 1] is in F, check for first half
            if (nums[s] <= target && target < nums[mid]) {
                // go F(left)
                e = mid - 1
            } else {
                // go right
                s = mid + 1
            }
        } else {
            // we can make sure [mid + 1, e] is in S, check for second half
            if (nums[mid] < target && target <= nums[e]) {
                // go S(right)
                s = mid + 1
            } else {
                e = mid - 1
            }
        }
    }

    return false
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 0, 1, 1, 1], 0), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1], 0), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([2, 5, 6, 0, 0, 1, 2], 0), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([2, 5, 6, 0, 0, 1, 2], 3), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 3, 1], 3), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 3, 1], 4), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 1], 1), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 1], 2), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 1, 1], 2), false);
});
