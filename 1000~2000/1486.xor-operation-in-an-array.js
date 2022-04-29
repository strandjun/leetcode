/**
 * https://leetcode.com/problems/xor-operation-in-an-array/
 * easy
 * 
 * Desc:
    Given an integer n and an integer start.

    Define an array nums where nums[i] = start + 2*i (0-indexed) and n == nums.length.

    Return the bitwise XOR of all elements of nums.
 */

/**
 * Example:
    Example 1:
    Input: n = 5, start = 0
    Output: 8
    Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
    Where "^" corresponds to bitwise XOR operator.

    Example 2:
    Input: n = 4, start = 3
    Output: 8
    Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.
    
    Example 3:
    Input: n = 1, start = 7
    Output: 7
    
    Example 4:
    Input: n = 10, start = 5
    Output: 2
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    // let res = start
    // for(let i = 1; i < n; i++) {
    //     res ^= start + 2 * i
    // }
    // return res

    // XOR operation initial value is 0
    let res = 0
    for(let i = 0; i < n; i++) {
        res ^= start + 2 * i
    }
    return res
};

const n = 5,  start = 0  // Output: 8
const n1 = 4,  start1 = 3  // Output: 8
const n2 = 1,  start2 = 7  // Output: 7
const n3 = 10, start3 = 5  // Output: 2

console.log('res0: ', xorOperation(n, start))
console.log('res1: ', xorOperation(n1, start1))
console.log('res2: ', xorOperation(n2, start2))
console.log('res2: ', xorOperation(n3, start3))
