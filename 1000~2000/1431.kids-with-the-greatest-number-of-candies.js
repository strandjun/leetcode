/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * easy
 * 
 * Desc:
    Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

    For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.
 */

/**
 * Example:
    Example 1:
    Input: candies = [2,3,5,1,3], extraCandies = 3
    Output: [true,true,true,false,true] 
    Explanation: 
    Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
    Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
    Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
    Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
    Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

    Example 2:
    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false] 
    Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.

    Example 3:
    Input: candies = [12,1,12], extraCandies = 10
    Output: [true,false,true]

 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0
    for (let i = 0; i < candies.length; i++) {
        max = candies[i] > max ? candies[i] : max
    }
    // let res = []
    // for (let i = 0; i < candies.length; i++) {
    //     res.push(candies[i] + extraCandies >= max)
    // }
    let res = new Array(candies.length)
    for (let i = 0; i < candies.length; i++) {
        res[i] = candies[i] + extraCandies >= max
    }
    return res
};

const candies1 = [2,3,5,1,3], extraCandies1 = 3
const candies2 = [4,2,1,1,2], extraCandies2 = 1
const candies3 = [12,1,12], extraCandies3 = 10

console.log('res: ', kidsWithCandies(candies1, extraCandies1))
console.log('res: ', kidsWithCandies(candies2, extraCandies2))
console.log('res: ', kidsWithCandies(candies3, extraCandies3))
