/**
 * https://leetcode.com/problems/partition-array-according-to-given-pivot/
 * Medium - 2161. Partition Array According to Given Pivot
 */

/**
 * Q:
 *  1. What is the size of input?
 *  2. Can the input be empty or null?
 *  3. Do I need to return a new array or change the nums in place?
 *  4. Is the pivot equal to one of the nums element?
 *  5. Do we have runtime or space limit?
 */

/**
 * Strategy:
 *  1. Brute: traverse nums, compare every item with pivot,
then get a less array, a equal array and a greater array, then combine all 3 to 1 and return.
[9, 12, 5, 10, 14, 3, 10], 10 => [9, 5, 3, 10, 10, 12, 14]

 *  2. two pointers
[9, 12, 5, 10, 14, 3, 10]
 l                     r
 */

// Time Complexity: O(N), Space Complexity:O(m+n)
function pivotArray1(nums: number[], pivot: number): number[] {
    //brute force
    const lessArr: number[] = []
    const greaterArr: number[] = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            lessArr.push(nums[i])
        } else if (nums[i] > pivot) {
            greaterArr.push(nums[i])
        } else {
            greaterArr.unshift(nums[i])
        }
    }

    return lessArr.concat(greaterArr)
}

// Time Complexity: O(N), Space Complexity:O(N)
function pivotArray(nums: number[], pivot: number): number[] {
    const res: number[] = [];
    let left = 0, right = nums.length - 1;

    for (let i = 0, j = nums.length - 1; i < nums.length, j >= 0; i++, j--) {
        if (nums[i] < pivot) {
            res[left++] = nums[i]
        }
        if (nums[j] > pivot) {
            res[right--] = nums[j]
        }
    }

    while (left <= right) {
        res[left++] = pivot
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(pivotArray([9, 12, 5, 10, 14, 3, 10], 10), [9, 5, 3, 10, 10, 12, 14]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(pivotArray([-3, 4, 3, 2], 2), [-3, 2, 4, 3]);
});
