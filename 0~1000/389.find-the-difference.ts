/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * East - 389. Find the Difference
 */

function findTheDifference0(s: string, t: string): string {
    let res = ''

    let sArr = s.split('').sort()
    let tArr = t.split('').sort()

    let sIdx = 0;
    let tIdx = 0;

    while (sIdx < s.length && tIdx < t.length) {
        if (sArr[sIdx] == tArr[tIdx]) {
            sIdx++
            tIdx++
        } else {
            res += tArr[tIdx]
            tIdx++
        }
    }
    while (tIdx < t.length) {
        res += tArr[tIdx]
        tIdx++
    }

    return res
};

function findTheDifference(s: string, t: string): string {
    let res = 0

    let i = 0, j = 0;

    while (j < t.length) {
        if (i < s.length) {
            res ^= s.charCodeAt(i)
            i++
        }
        if (j < t.length) {
            res ^= t.charCodeAt(j)
            j++
        }
    }

    return String.fromCharCode(res)
};

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('assertEquals Test', () => {
    assertEquals(findTheDifference('abcd', 'abcde'), 'e');
});

Deno.test('assertEquals Test', () => {
    assertEquals(findTheDifference('', 'y'), 'y');
});
