/**
 * https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * Medium
 * Time O(N^4)
 * Space O(1)   
 */

function countTriplets(arr: number[]): number {
    // n^3
    let count = 0

    let val = 0
    let t = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            val = 0
            t = j
            // i ~ j
            while (t >= i) {
                val = val ^ arr[t]
                t--
            }

            for (let k = j; k < arr.length; k++) {

                let cur = val
                if (k > j) {
                    t = k
                    while (t > j) {
                        cur = cur ^ arr[t]
                        t--
                    }
                }
                if (cur === 0) {
                    count++
                }
            }
        }
    }

    return count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

// Deno.test("assertEquals Test", () => {
//     assertEquals(countTriplets([2, 3, 1, 6, 7]), 4);
// });

Deno.test("assertEquals Test", () => {
    assertEquals(countTriplets([1, 3, 5, 7, 9]), 3);
});

// Deno.test("assertEquals Test", () => {
//     assertEquals(countTriplets([1, 1, 1, 1, 1]), 10);
// });
