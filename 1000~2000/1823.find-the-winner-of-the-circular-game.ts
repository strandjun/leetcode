/**
 * https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 * Medium    
 */

function findTheWinner1(n: number, k: number): number {
    // circle, start
    const circle = new Array(n).fill(0).map((_, i) => i + 1)
    let start = 0

    while (circle.length > 1) {
        start = (start + k - 1) % circle.length
        circle.splice(start, 1)
    }
    return circle[0]
}


// from other's
function findTheWinner(n: number, k: number): number {
    let ans = 0
    for (let i = 1; i <= n; i += 1) {
        ans = (ans + k) % i
    }
    return ans + 1
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(findTheWinner(5, 2), 3);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findTheWinner(6, 5), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(findTheWinner(500, 5), 332);
});