/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/
 * Medium
 */

function maxDepthAfterSplit1(seq: string): number[] {
    const stack: number[] = []

    let al = 0
    let bl = 0
    const cur: string[] = []

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            if (al > bl) {
                // a+
                stack.push(0)
                bl++
                cur.push('b')
            } else {
                stack.push(1)
                al++
                cur.push('a')
            }
        }
        if (seq[i] === ')') {
            const last = cur.pop()
            if (last === 'a') {
                al--
                stack.push(1)
            } else {
                bl--
                stack.push(0)
            }
        }

        console.log('i, al, bl, cur: ', i, al, bl, cur)
    }

    return stack
}


function maxDepthAfterSplit(seq: string): number[] {
    const res: number[] = new Array(seq.length).fill(0)

    let al = 0
    let bl = 0

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === '(') {
            if (al < bl) {
                al++
            } else {
                bl++
                res[i] = 1
            }
        } else {
            if (al > bl) {
                al--
            } else {
                bl--
                res[i] = 1
            }
        }
    }

    return res
}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(maxDepthAfterSplit("(()())"), [0, 1, 1, 1, 1, 0]);
});

// Deno.test("assertEquals Test", () => {
//     assertEquals(maxDepthAfterSplit("()(())()"), [0, 0, 0, 1, 1, 0, 1, 1]);
// });
