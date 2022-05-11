/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Medium 33. Search in Rotated Sorted Array
 */

// Brute Force, TC: O(N), SC: O(1)
function search0(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }

    return -1
};

// Binary Search, TC: O(log N), SC: O(1)
function search1(nums: number[], target: number): number {

    let l = 0, r = nums.length - 1

    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        if (nums[m] === target) {
            return m
        }

        // console.log(l, r, m)

        if (nums[l] <= nums[m]) {
            // if in the left sorted portion
            if (nums[m] > target && nums[l] <= target) {
                // go left
                r = m - 1
            } else {
                // go right
                l = m + 1
            }
        } else {
            // if in the right sorted portion
            if (nums[m] < target && nums[r] >= target) {
                // go right
                l = m + 1
            } else {
                // go left
                r = m - 1
            }
        }
    }

    return -1
};


// find the pivot then Binary Search, TC: O(2log N), SC: O(1)
function search(nums: number[], target: number): number {

    function findPivotPoint(nums: number[]) {
        let l = 0, r = nums.length - 1
        let pivot = null
        while (l <= r) {
            pivot = Math.floor((l + r) / 2)
            if (pivot >= 1 && nums[pivot] < nums[pivot - 1]) {
                return pivot
            }
            if (nums[pivot] >= nums[0]) {
                // go right
                l = pivot + 1
            } else {
                r = pivot - 1
            }
        }
        return 0
    }

    function binarySearch(nums: number[], target: number, l: number, r: number) {
        while (l <= r) {
            const m = Math.floor((l + r) / 2)
            if (nums[m] === target) {
                return m
            } else if (nums[m] < target) {
                // go right
                l = m + 1
            } else {
                // go left
                r = m - 1
            }
        }
        return -1
    }

    // find the pivot
    const pivot = findPivotPoint(nums)
    // console.log('pivot: ', pivot)
    if (pivot === 0 || target < nums[0]) {
        return binarySearch(nums, target, pivot, nums.length - 1)
    } else {
        return binarySearch(nums, target, 0, pivot - 1)
    }
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(search([3, 1], 1), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1, 3], 3), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(search([1], 0), -1);
});
