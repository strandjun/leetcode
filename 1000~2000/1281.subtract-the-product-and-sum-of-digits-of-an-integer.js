/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * easy
 * 
 * Desc:
    Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 */

/**
 * Example:
    Example 1:
    Input: n = 234
    Output: 15 
    Explanation: 
    Product of digits = 2 * 3 * 4 = 24 
    Sum of digits = 2 + 3 + 4 = 9 
    Result = 24 - 9 = 15
    
    Example 2:
    Input: n = 4421
    Output: 21
    Explanation: 
    Product of digits = 4 * 4 * 2 * 1 = 32 
    Sum of digits = 4 + 4 + 2 + 1 = 11 
    Result = 32 - 11 = 21
 */

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product = 1, sum = 0
    n = n + ''
    for (let i = 0; i < n.length; i++) {
        product *= +n[i]
        sum += +n[i]
    }
    
    return product - sum
};

const n1 = 234  // 15
const n2 = 4421 // 21

console.log('res1: ', subtractProductAndSum(n1))
console.log('res2: ', subtractProductAndSum(n2))
