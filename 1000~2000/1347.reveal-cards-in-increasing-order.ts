/**
 * https://leetcode.com/problems/reveal-cards-in-increasing-order/
 * Medium    
 */

function minSteps1(s: string, t: string): number {
    const goal = new Map<string, number>()

    for (let i = 0; i < s.length; i++) {
        goal.set(s[i], (goal.get(s[i]) || 0) + 1)
    }

    for (let j = 0; j < t.length; j++) {
        if (!goal.has(t[j])) {
            continue
        }

        const val = goal.get(t[j])
        if (val && val - 1 > 0) {
            goal.set(t[j], val - 1)
        } else (
            goal.delete(t[j])
        )
    }

    let count = 0
    for (const val of goal.values()) {
        count += val
    }

    return count
}


function minSteps(s: string, t: string): number {
    const cntArr = new Array(26).fill(0)
    let count = 0
    const aUniCode = 'a'.charCodeAt(0)

    for (let i = 0; i < s.length; i++) {
        cntArr[s.charCodeAt(i) - aUniCode]++
    }

    for (let j = 0; j < t.length; j++) {
        if (cntArr[t.charCodeAt(j) - aUniCode] > 0) {
            cntArr[t.charCodeAt(j) - aUniCode]--
            count++
        }
    }

    return t.length - count
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(minSteps("bab", "aba"), 1);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minSteps("leetcode", "practice"), 5);
});

Deno.test("assertEquals Test", () => {
    assertEquals(minSteps("anagram", "mangaar"), 0);
});
