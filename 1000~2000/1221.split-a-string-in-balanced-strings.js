/**
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 * easy
 * 
 * Desc:
    Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

    Given a balanced string s, split it in the maximum amount of balanced strings.

    Return the maximum amount of split balanced strings.
 */

/**
 * Example:
   Example 1:
   Input: s = "RLRRLLRLRL"
   Output: 4
   Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
   
   Example 2:
   Input: s = "RLLLLRRRLR"
   Output: 3
   Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

   Example 3:
   Input: s = "LLLLRRRR"
   Output: 1
   Explanation: s can be split into "LLLLRRRR".

   Example 4:
   Input: s = "RLRRRLLRLL"
   Output: 2
   Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
   // usd 3 constants
   // let count = 0
   // let ll = 0, rl = 0
   // for (let i = 0; i < s.length; i++) {
   //    if (s[i] === 'L') {
   //       ll++
   //    } else if (s[i] === 'R') {
   //       rl++
   //    }
   //    if (ll !== 0 && ll === rl) {
   //       count++
   //       ll = 0
   //       rl = 0
   //    }
   // }
   // return count 
   
   // another method
   let result = balance = 0;
   for (let str of s) {
      str === 'R' ? balance++ : balance--;
      if(balance === 0) {
         result++
      }
   }
   return result
};

const s = "RLRRLLRLRL" // Output: 4
const s1 = "RLLLLRRRLR" // Output: 3
const s2 = "LLLLRRRR"   // Output: 1
const s3 = "RLRRRLLRLL" // Output: 2


console.log('res0: ', balancedStringSplit(s))
console.log('res1: ', balancedStringSplit(s1))
console.log('res2: ', balancedStringSplit(s2))
console.log('res3: ', balancedStringSplit(s3))
