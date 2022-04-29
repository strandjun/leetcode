/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * easy
 * 
 * Desc:
    A string is a valid parentheses string (denoted VPS) if it meets one of the following:

    It is an empty string "", or a single character not equal to "(" or ")",
    It can be written as AB (A concatenated with B), where A and B are VPS's, or
    It can be written as (A), where A is a VPS.
    We can similarly define the nesting depth depth(S) of any VPS S as follows:

    depth("") = 0
    depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
    depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
    depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
    For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

    Given a VPS represented as string s, return the nesting depth of s.
 */

/**
 * Example:
   Example 1:
   Input: s = "(1+(2*3)+((8)/4))+1"
   Output: 3
   Explanation: Digit 8 is inside of 3 nested parentheses in the string.

   Example 2:
   Input: s = "(1)+((2))+(((3)))"
   Output: 3

   Example 3:
   Input: s = "1+(2*3)/(2-1)"
   Output: 1

   Example 4:
   Input: s = "1"
   Output: 0
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
   let depth = 0
   let max = 0
   for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
         depth++
         // max = Math.max(depth, max)
         max = depth > max ? depth : max
      } else if (s[i] === ')') {
         depth--
      }
   }
   return max
};

const s = "(1+(2*3)+((8)/4))+1" // Output: 3
const s1 = "(1)+((2))+(((3)))"  // Output: 3
const s2 = "1+(2*3)/(2-1)"      // Output: 1
const s3 = "1"                  // Output: 0

console.log('res0: ', maxDepth(s))
console.log('res1: ', maxDepth(s1))
console.log('res2: ', maxDepth(s2))
console.log('res3: ', maxDepth(s3))
