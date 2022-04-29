/**
 * https://leetcode.com/problems/number-of-good-pairs/
 * easy
 * 
 * Desc:
    Given an array of integers nums.
    A pair (i,j) is called good if nums[i] == nums[j] and i < j.
    Return the number of good pairs.
 */

/**
 * Example:
    Example 1:
    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
    
    Example 2:
    Input: nums = [1,1,1,1]
    Output: 6
    Explanation: Each pair in the array are good.
    
    Example 3:
    Input: nums = [1,2,3]
    Output: 0
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    // Runtime: 80ms  Memory: 38.4MB
    // let res = 0
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i+1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             res += 1
    //         }
    //     }
    // }
    // return res

    // Runtime: 76ms  Memory: 38.4MB
    const resObj = {}
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        resObj[nums[i]] = resObj[nums[i]] ? ++resObj[nums[i]] : 1
    }
    const keys = Object.keys(resObj)
    for (let j = 0; j < keys.length; j++) {
        const count = resObj[keys[j]]
        res += count > 1 ? count * (count - 1) / 2 : 0
    }
    return res
};

const nums1 = [1,2,3,1,1,3]
const nums2 = [1,1,1,1]
const nums3 = [1,2,3]

console.log('res1: ', numIdenticalPairs(nums1))
console.log('res2: ', numIdenticalPairs(nums2))
console.log('res3: ', numIdenticalPairs(nums3))
