/**
 * https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
 * Medium
 * 
 * Desc:
    A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

    Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.
 */

/**
 * Example:
    Example 1:
    Input: n = "32"
    Output: 3
    Explanation: 10 + 11 + 11 = 32
    
    Example 2:
    Input: n = "82734"
    Output: 8
    
    Example 3:
    Input: n = "27346209830709182346"
    Output: 9
 */

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    // let max = 0
    // for (let i = 0; i < n.length; i++) {
    //     max = Math.max(max, n[i])
    // }
    // return max

    return Math.max(...n.split(''))
};

const n = "32"                    // Output: 3
const n1 = "82734"                // Output: 8
const n2 = "27346209830709182346" // Output: 9
const n3 = "1112212212211221212"  // Output: 2

console.log('res0: ', minPartitions(n))
console.log('res1: ', minPartitions(n1))
console.log('res2: ', minPartitions(n2))
console.log('res2: ', minPartitions(n3))
