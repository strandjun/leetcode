/**
 * https://leetcode.com/problems/maximum-ice-cream-bars/
 * Medium
 * 
 * Desc:
    It is a sweltering summer day, and a boy wants to buy some ice cream bars.

    At the store, there are n ice cream bars. You are given an array costs of length n, where costs[i] is the price of the ith ice cream bar in coins. The boy initially has coins coins to spend, and he wants to buy as many ice cream bars as possible. 

    Return the maximum number of ice cream bars the boy can buy with coins coins.

    Note: The boy can buy the ice cream bars in any order.
 */

/**
 * Example:
    Example 1:
    Input: costs = [1,3,2,4,1], coins = 7
    Output: 4
    Explanation: The boy can buy ice cream bars at indices 0,1,2,4 for a total price of 1 + 3 + 2 + 1 = 7.

    Example 2:
    Input: costs = [10,6,8,7,7,8], coins = 5
    Output: 0
    Explanation: The boy cannot afford any of the ice cream bars.

    Example 3:
    Input: costs = [1,6,3,1,2,5], coins = 20
    Output: 6
    Explanation: The boy can buy all the ice cream bars for a total price of 1 + 6 + 3 + 1 + 2 + 5 = 18.
 */

/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let count = 0
    costs.sort((a, b) => a - b)
    for (let i = 0; i < costs.length; i++) {
        if (costs[i] > coins) {
            return count
        }
        count++
        coins -= costs[i]
    }
    return count
};

const costs = [1,3,2,4,1], coins = 7      // Output: 4
const costs1 = [10,6,8,7,7,8], coins1 = 5 // Output: 0
const costs2 = [1,6,3,1,2,5], coins2 = 20 // Output: 6


console.log('res0: ', maxIceCream(costs, coins))
console.log('res1: ', maxIceCream(costs1, coins1))
console.log('res2: ', maxIceCream(costs2, coins2))
