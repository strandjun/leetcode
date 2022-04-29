/**
 * https://leetcode.com/problems/watering-plants/
 * Medium    
 */

function wateringPlants(plants: number[], capacity: number): number {
    let res = 0

    let cur = capacity
    for (let i = 0; i < plants.length; i++) {
        res += 1
        cur -= plants[i]

        if (plants[i + 1] > cur) {
            cur = capacity
            // this step could reduce the Runtime from 134ms to 72ms
            // res += (i - (-1)) * 2
            res += (i + 1) * 2
        }

        // console.log('i, cur, res: ', i, cur, res)
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(wateringPlants([2, 2, 3, 3], 5), 14);
});

Deno.test("assertEquals Test", () => {
    assertEquals(wateringPlants([1, 1, 1, 4, 2, 3], 4), 30);
});

Deno.test("assertEquals Test", () => {
    assertEquals(wateringPlants([7, 7, 7, 7, 7, 7, 7], 8), 49);
});