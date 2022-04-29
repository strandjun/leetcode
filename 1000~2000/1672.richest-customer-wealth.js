/**
 * https://leetcode.com/problems/richest-customer-wealth/
 * easy
 * 
 * Desc:
    You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

    A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 */

/**
 * Example:
    Example 1:
    Input: accounts = [[1,2,3],[3,2,1]]
    Output: 6
    Explanation:
    1st customer has wealth = 1 + 2 + 3 = 6
    2nd customer has wealth = 3 + 2 + 1 = 6
    Both customers are considered the richest with a wealth of 6 each, so return 6.
    
    Example 2:
    Input: accounts = [[1,5],[7,3],[3,5]]
    Output: 10
    Explanation: 
    1st customer has wealth = 6
    2nd customer has wealth = 10 
    3rd customer has wealth = 8
    The 2nd customer is the richest with a wealth of 10.
    
    Example 3:
    Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
    Output: 17
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let max = 0

    for(let i = 0; i < accounts.length; i++) {
        // ith customer
        let customerMax = 0
        for(let j = 0; j < accounts[i].length; j++) {
            customerMax += accounts[i][j] 
        }
        max = customerMax > max ? customerMax : max
    }
    return max    
};

const accounts1 = [[1,2,3],[3,2,1]]
const accounts2 = [[1,5],[7,3],[3,5]]
const accounts3 = [[2,8,7],[7,1,3],[1,9,5]]

console.log('res1: ', maximumWealth(accounts1))
console.log('res2: ', maximumWealth(accounts2))
console.log('res3: ', maximumWealth(accounts3))
