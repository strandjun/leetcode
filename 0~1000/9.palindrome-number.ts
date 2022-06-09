/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Easy - 9. Palindrome Number
 */

// do not convert the integer to a string
function isPalindrome0(x: number): boolean {
    if (x < 0) {
        return false
    }

    let newNum = 0
    let oldNum = x
    while (oldNum > 0) {
        newNum = newNum * 10 + oldNum % 10
        oldNum = Math.floor(oldNum / 10)
    }

    return newNum == x
};


// consider the overflow
/**
 * TC: O(N) where N is the number of digits. 
 *     At the same time it's O(lnX), where X is the input value.
 */

function isPalindrome(x: number): boolean {
    if (x < 0 || (x > 0 && x % 10 == 0)) {
        return false
    }

    let newHalfNum = 0
    while (x > newHalfNum) {
        newHalfNum = newHalfNum * 10 + x % 10
        x = Math.floor(x / 10)
    }

    return (newHalfNum == x || Math.floor(newHalfNum / 10) == x)
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(isPalindrome(121), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isPalindrome(-121), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(isPalindrome(10), false);
});
