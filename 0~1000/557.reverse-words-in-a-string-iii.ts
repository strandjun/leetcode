/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * Easy - 557. Reverse Words in a String III
 */

function reverseWords0(s: string): string {
    const reverse = (str: string, l: number, r: number) => {
        let res = ''
        for (let i = r; i >= l; i--) {
            res += str.charAt(i)
        }
        return res
    }

    let str = ''
    let left = 0
    for (let i = 0; i < s.length; i++) {
        if (i === s.length - 1) {
            str += reverse(s, left, i)
        } else if (s.charAt(i) === " ") {
            str += reverse(s, left, i - 1) + ' '
            left = i + 1
        }
    }
    return str
};

// It's a brilliant solution!!!
function reverseWords(s: string): string {
    let res = ''
    let word = ''
    for (const c of s) {
        if (c === ' ') {
            res += word + c
            word = ''
        } else {
            word = c + word
        }
    }
    return res + word
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
});

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("God Ding"), "doG gniD");
});
