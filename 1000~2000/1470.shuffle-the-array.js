/**
 * https://leetcode.com/problems/shuffle-the-array/
 * easy
 * 
 * Desc:
    Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
    Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

/**
 * Example:
    Example 1:
    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
    Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

    Example 2:
    Input: nums = [1,2,3,4,4,3,2,1], n = 4
    Output: [1,4,2,3,3,2,4,1]

    Example 3:
    Input: nums = [1,1,2,2], n = 2
    Output: [1,2,1,2]
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // Runtime: 84ms  Memory: 41MB
    // let res = []
    // for(let i = 0; i < nums.length; i++) {
    //     if (i < n) {
    //         res[i*2] = nums[i]
    //     } else {
    //         res[(i-n) * 2 + 1] = nums[i]
    //     }
    // }
    // return res

    // Runtime: 88ms  Memory: 40.4MB
    let res = []
    let r1 = []
    for(let i = 0; i < nums.length; i++) {
        if (i < n) {
            r1.push(nums[i])
        } else {
            res.push(r1[i-n])
            res.push(nums[i])
        }
    }
    return res 
};

const nums1 = [2,5,1,3,4,7], n1 = 3
const nums2 = [1,2,3,4,4,3,2,1], n2 = 4
const nums3 = [1,1,2,2], n3 = 2

console.log('res1: ', shuffle(nums1, n1))
console.log('res2: ', shuffle(nums2, n2))
console.log('res3: ', shuffle(nums3, n3))
