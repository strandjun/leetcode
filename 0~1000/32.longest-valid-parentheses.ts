/**
 * https://leetcode.com/problems/longest-valid-parentheses/
 * Hard - 32. Longest Valid Parentheses
 */

/**
 * Steps:
 * 1. Scan the string from beginning to end.
 * 2. If current character is ‘(', push its index to the stack. 
      If current character is ')' and the character at the index of the top of stack is '(', we just find a matching pair so pop from the stack. Otherwise, we push the index of ‘)' to the stack.
 * 3. After the scan is done, the stack will only contain the indices of characters which cannot be matched. 
      Then substring between adjacent indices should be valid parentheses."
 */
// DP, TC: O(N), SC: O(N)
function longestValidParentheses0(s: string): number {
    let stack = [-1]
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            stack.push(i)
        } else {
            const len = stack.length
            if (len > 0 && (s.charAt(stack[len - 1]) == '(')) {
                stack.pop()
            } else {
                stack.push(i)
            }
        }
    }

    stack.push(s.length)
    let res = 0
    for (let r = 1; r < stack.length; r++) {
        res = Math.max(res, stack[r] - stack[r - 1] - 1)
    }
    return res
}

// DP, TC: O(N), SC: O(N)
function longestValidParentheses(s: string): number {
    let stack = [-1] // You can imagine there is a ) at index -1 position, i.e. s[-1] = ')'
    let ans = 0
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            stack.push(i)
        } else {
            /**
             * if there is a match (i.e. "()"), then we can pop the stack
             * and update the max length by (i - indices.top())
             * (because the string in (indices.top(), i] is a valid parenthese)
             * else if there isn't a match (i.e. "))"), then we can substitute
             * the top of the stack by the latest one
             * To sum up, no matter "()" or "))", we all need to pop the stack
             */
            stack.pop()

            if (stack.length == 0) {
                // if the stack is empty, it means a "))" occurs
                stack.push(i)
            } else {
                // a "()" occurs
                ans = Math.max(ans, i - stack[stack.length - 1])
            }
        }
    }

    return ans
}

/**
 * 012345678
 * ())()(())
 * 
 */

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(longestValidParentheses("()"), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(longestValidParentheses("(()"), 2);
});

Deno.test("assertEquals Test", () => {
    assertEquals(longestValidParentheses(")()())"), 4);
});

Deno.test("assertEquals Test", () => {
    assertEquals(longestValidParentheses(""), 0);
});
