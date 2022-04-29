/**
 * https://leetcode.com/problems/maximum-69-number/
 * Easy
 * 
 * Desc:
    Given a positive integer num consisting only of digits 6 and 9.

    Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 */

/**
 * Example:
    Example 1:
    Input: num = 9669
    Output: 9969
    Explanation: 
    Changing the first digit results in 6669.
    Changing the second digit results in 9969.
    Changing the third digit results in 9699.
    Changing the fourth digit results in 9666. 
    The maximum number is 9969.

    Example 2:
    Input: num = 9996
    Output: 9999
    Explanation: Changing the last digit 6 to 9 results in the maximum number.

    Example 3:
    Input: num = 9999
    Output: 9999
    Explanation: It is better not to apply any change.
 */

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let res = (num + '').split('')
    for (let i = 0; i < res.length; i++) {
        if (res[i] === '6') {
            res[i] = '9'
            return res.join('')
        }
    }
    return num
};

const num = 9669  // Output: 9969
const num1 = 9996 // Output: 9999
const num2 = 9999 // Output: 9999


console.log('res0: ', maximum69Number(num))
console.log('res1: ', maximum69Number(num1))
console.log('res2: ', maximum69Number(num2))
