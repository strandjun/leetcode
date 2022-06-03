/**
 * https://leetcode.com/problems/valid-parentheses/
 * Easy - 20. Valid Parentheses
 */

function isValid0(s: string): boolean {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let arr = []
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        if (!arr.length) {
            arr.push(cur)
        } else {
            const last = arr[arr.length - 1]
            if (obj[cur] && (obj[cur] === last)) {
                arr.pop()
            } else {
                arr.push(cur)
            }
        }
    }

    return arr.length == 0
};


function isValid(s: string): boolean {
    // important STEP!
    if (s.length % 2 == 1) {
        return false
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        if (cur == '(') {
            stack.push(')')
        } else if (cur == '{') {
            stack.push('}')
        } else if (cur == '[') {
            stack.push(']')
        } else if (stack.length == 0 || stack.pop() != cur) {
            return false
        }
    }

    return stack.length == 0
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(isValid('()'), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isValid('()[]{}'), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isValid('(]'), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isValid('([{)'), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isValid('([{}])'), true);
});
