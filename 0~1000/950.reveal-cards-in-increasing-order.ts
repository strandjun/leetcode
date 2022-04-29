/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 * Medium    
 */

// for (let i = 0; i < arr.length; i++) {}
function deckRevealedIncreasing(deck: number[]): number[] {

    deck.sort((a, b) => a - b)

    const res: number[] = []

    while (deck.length) {
        res.unshift(deck.pop() || 0)
        res.unshift(res.pop() || 0)
    }
    res.push(res.shift() || 0)
    return res

}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7]), [2, 13, 3, 11, 5, 17, 7]);
});

Deno.test("assertEquals Test", () => {
    assertEquals(deckRevealedIncreasing([1, 1000]), [1, 1000]);
});
