/**
 * https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/
 * Medium
 */

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

function getMinSwaps(num: string, k: number): number {
    let count = 0

    let nums = num.split('').map(item => +item)
    const nums2 = [...nums]
    while (k > 0) {
        nextPermutation(nums2)
        k--
    }

    let i = 0
    let j = 0

    while (i < nums.length) {
        j = i
        while (nums[j] != nums2[i]) {
            j++
        }

        while (i < j) {
            nums = swapFn(nums, j, j - 1)
            j--
            count++
        }
        i++
    }

    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(getMinSwaps("5489355142", 4), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(getMinSwaps("11112", 4), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(getMinSwaps("00123", 1), 1);
});
