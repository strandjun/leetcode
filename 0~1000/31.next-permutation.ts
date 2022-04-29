/**
 * https://leetcode.com/problems/next-permutation/
 * Medium
 */

function nextPermutation(nums: number[]): number[] {
    const len = nums.length;

    // from back to front
    for (let i = len - 1; i > 0; i--) {
        // find pivot
        if (nums[i - 1] < nums[i]) {
            // find second smallest num after i - 1 to swap, secondSmall must exist!
            const secondSmall = lastIndexOfGreater(nums, i - 1);
            swapFn(nums, i - 1, secondSmall);

            // in ascending order after i - 1
            sortInAscending(nums, i, len - 1);
            return nums;
        }
    }
    // no pivot
    sortInAscending(nums, 0, len - 1);
    return nums;
}

const lastIndexOfGreater = (nums: number[], idx: number): number => {
    const curNum = nums[idx];
    let i = nums.length - 1;
    while (i > idx) {
        if (nums[i] > curNum) return i;
        i--;
    }
    return -1;
};

const swapFn = (nums: number[], a: number, b: number): number[] => {
    const tmp = nums[a];
    nums[a] = nums[b];
    nums[b] = tmp;
    return nums;
};

const sortInAscending = (nums: number[], s: number, e: number): number[] => {
    let tmp;
    while (s < e) {
        tmp = nums[s];
        nums[s] = nums[e];
        nums[e] = tmp;
        s++;
        e--;
    }
    return nums;
};


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(nextPermutation([1, 2, 3]), [1, 3, 2]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(nextPermutation([3, 2, 1]), [1, 2, 3]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(nextPermutation([1, 1, 5]), [1, 5, 1]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(nextPermutation([2, 3, 1]), [3, 1, 2]);
});