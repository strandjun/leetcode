/**
 * https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/
 * Medium
 */

// for (let i = 0; i < arr.length; i++) {}
function numOfPairs(nums: string[], target: string): number {
    let count = 0

    // convert array to Map
    const numsMap = new Map<string, number>()
    nums.forEach(el => {
        numsMap.set(el, (numsMap.get(el) || 0) + 1)
    })
    // console.log(numsMap)

    for (let i = 0; i < nums.length; i++) {
        if (target.indexOf(nums[i]) > -1) {
            const pair = target.replace(nums[i], '')
            if (numsMap.has(pair) && (nums[i] + pair === target)) {
                if (nums[i] === pair) {
                    count += (numsMap.get(pair) || 0) - 1
                } else {
                    count += (numsMap.get(pair) || 0)
                }
            }
        }
    }


    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(numOfPairs(["777", "7", "77", "77"], "7777"), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numOfPairs(["123", "4", "12", "34"], "1234"), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(numOfPairs(["1", "1", "1"], "11"), 6);
});
