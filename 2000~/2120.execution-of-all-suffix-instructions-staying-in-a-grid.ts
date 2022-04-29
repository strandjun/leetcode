/**
 * https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid/
 * Medium    
 */

function executeInstructions(n: number, startPos: number[], s: string): number[] {
    const res: number[] = []

    let [x, y] = startPos
    let count = 0

    for (let i = 0; i < s.length; i++) {
        [x, y] = startPos
        count = 0

        for (let j = i; j < s.length; j++) {
            switch (s.charAt(j)) {
                case 'L':
                    y -= 1
                    break;
                case 'R':
                    y += 1
                    break;
                case 'U':
                    x -= 1
                    break;
                case 'D':
                    x += 1
                    break;
            }

            if (x < 0 || y < 0 || x >= n || y >= n) {
                // off the grid
                break;
            } else {
                count++
            }
        }
        res.push(count)

        // console.log('i, count, x, y: ', i, count, x, y)
    }

    return res
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(executeInstructions(2, [1, 1], "LURD"), [4, 1, 0, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(executeInstructions(3, [0, 1], "RRDDLU"), [1, 5, 4, 3, 1, 0]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(executeInstructions(1, [0, 0], "LRUD"), [0, 0, 0, 0]);
});