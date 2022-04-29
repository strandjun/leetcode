/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 * Easy - 680. Valid Palindrome II 
 */

function validPalindrome(s: string): boolean {

    const isPalindrome = (s: string, i: number, j: number): boolean => {
        while (i < j) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false
            }
            i++
            j--
        }
        return true
    }

    let m = 0
    let n: number = s.length - 1

    while (m < n) {
        if (s.charAt(m) !== s.charAt(n)) {
            return isPalindrome(s, m + 1, n) || isPalindrome(s, m, n - 1)
        }
        m++
        n--
    }
    return true

}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("acxcybycxcxa"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("aabdeenddbaagbddeedbaa"), false);
});

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("mlcuppuculm"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("aba"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("abdedcba"), true);
});

Deno.test("assertEquals Test", () => {
    assertEquals(validPalindrome("abc"), false);
});
