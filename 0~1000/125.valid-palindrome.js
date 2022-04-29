/**
 * https://leetcode.com/problems/valid-palindrome/
 * Easy - 125. Valid Palindrome
 *
 * Mock interview Problem 1 in interviewing.io
 */

/* 
Write a function that takes an input string and returns true if the string is a palindrome and false otherwise.

Palindrome:
racecar
madam
 */

/*
testCases = [
  { input: null,      output: false },
  { input: undefined, output: false },
  { input: 101,       output: false },

  { input: '',        output: true },
  { input: ' ',       output: true },
  { input: 'a ba',    output: true },
  { input: 'madAm',   output: true },
  { input: '010',     output: true },
  { input: 'racecar', output: true },
  { input: 'A man, a plan, a canal: Panama', output: true },
];
 */

function isPalindrome(s) {
  // type check
  if (typeof s !== 'string') {
    return false;
  }

  if (!s.length) {
    return true;
  }

  s = s.replace(/[^a-zA-Z0-9]/g, '');
  // s = s.replace(/\s/g, '');
  // s = s.replaceAll(' ', ''); // not supported
  s = s.toLowerCase();

  let m = 0;
  let n = s.length - 1;
  while (m < n) {
    if (s.charAt(m) === s.charAt(n)) {
      m++;
      n--;
    } else {
      return false;
    }
  }
  return true;
}

import { assertEquals } from 'https://deno.land/std@0.102.0/testing/asserts.ts';

Deno.test('Test Assert Equals true', () => {
  assertEquals(isPalindrome('racecar'), true);
  assertEquals(isPalindrome(''), true);
  assertEquals(isPalindrome(' '), true);
  assertEquals(isPalindrome('a ba'), true);
  assertEquals(isPalindrome('madAm'), true);
  assertEquals(isPalindrome('010'), true);
  assertEquals(isPalindrome('A man, a plan, a canal: Panama'), true);
});

Deno.test('Test Assert Equals false', () => {
  assertEquals(isPalindrome(null), false);
  assertEquals(isPalindrome(undefined), false);
  assertEquals(isPalindrome(101), false);
});
