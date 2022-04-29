/**
 * https://leetcode.com/problems/build-array-from-permutation/
 * Easy - 1920. Build Array from Permutation
 */

function buildArray1(nums: number[]): number[] {
    // return nums.map(elem => nums[elem])
    const ans = []
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[nums[i]])
    }
    return ans
}
 
/**
 * Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
 * 
 * a trick used to do in-place array manupulation:
 *      formula: a = r + bq
 *      where q > r and b is not divisible by q
 *      r holds the prev num and bq holds the answer
 */
function buildArray(nums: number[]): number[] {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] + n * (nums[nums[i]] % n)
    }
    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n)
    }

    return nums
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

const input = [0, 2, 1, 5, 3, 4]
const output = [0, 1, 2, 4, 5, 3]

const input1 = [5, 0, 1, 2, 3, 4]
const output1 = [4, 5, 0, 1, 2, 3]

Deno.test("assertEquals Test", () => {
    assertEquals(buildArray(input), output);
});

Deno.test("assertEquals Test", () => {
    assertEquals(buildArray(input1), output1);
});
