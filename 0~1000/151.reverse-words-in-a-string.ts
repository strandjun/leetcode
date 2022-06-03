/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * Medium - 151. Reverse Words in a String
 */

/**
 * Q:
 *  1. multiple spaces between two words?
 *  2. empty or null?
 *  3. only lowercase english letter?
 */

// TC: O(N), SC: O(N)
function reverseWords0(s: string): string {
    let res = ''
    const arr = []

    s = s.trim()
    let tmp = ''
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            if (tmp != '') {
                arr.push(tmp)
            }
            tmp = ''
        } else {
            tmp += s[i]
        }
    }

    if (tmp != '') {
        arr.push(tmp)
    }

    for (let k = arr.length - 1; k >= 0; k--) {
        res += k != 0 ? arr[k] + ' ' : arr[k]
    }

    return res
};

/**
 * step1: reverse the whole string
 * step2: reverse each word
 * step3: remove multiple spaces
 */

// TC: O(N), SC: O(N)
function reverseWords(s: string): string {

    const arr = s.trim().split('')
    const reverse = (arr: string[], l: number, r: number) => {
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }

    // reverse whole arr
    reverse(arr, 0, arr.length - 1);

    // reverse each word
    let idx = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == ' ') {
            if (idx < i) {
                reverse(arr, idx, i - 1);
                idx = i + 1;
            }
        } else if (i == arr.length - 1) {
            reverse(arr, idx, i);
        }
    }

    // remove multiple spaces
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if ((i == 0 || i == arr.length - 1) && arr[i] == ' ') {
            continue
        }
        if (arr[i - 1] == ' ' && arr[i] == ' ') {
            continue
        } else {
            res += arr[i]
        }
    }

    return res
};

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("  Bob    Loves  Alice   "), "Alice Loves Bob");
});

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("the sky is blue"), "blue is sky the");
});

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("  hello world  "), "world hello");
});

Deno.test("assertEquals Test", () => {
    assertEquals(reverseWords("a good   example"), "example good a");
});
