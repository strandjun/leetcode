/**
 * https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
 * Easy - 2108. Find First Palindromic String in the Array
 */

function firstPalindrome(words: string[]): string {

    const isPalindrome = (s: string): boolean => {
        let i = 0
        let j = s.length - 1
        while (i < j) {
            if (s.charAt(i) !== s.charAt(j)) {
                return false
            }
            i++
            j--
        }
        return true
    }

    for (let k = 0; k < words.length; k++) {
        if (isPalindrome(words[k])) {
            return words[k]
        }
    }
    return ""

}


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]), "ada");
});

Deno.test("assertEquals Test", () => {
    assertEquals(firstPalindrome(["notapalindrome", "racecar"]), "racecar");
});

Deno.test("assertEquals Test", () => {
    assertEquals(firstPalindrome(["def", "ghi"]), "");
});
