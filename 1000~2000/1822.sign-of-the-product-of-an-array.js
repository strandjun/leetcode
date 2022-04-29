/**
 * https://leetcode.com/problems/sign-of-the-product-of-an-array/
 * easy
 * 
 * Desc:
    There is a function signFunc(x) that returns:
    1 if x is positive.
    -1 if x is negative.
    0 if x is equal to 0.
    You are given an integer array nums. Let product be the product of all values in the array nums.

    Return signFunc(product).
 */

/**
 * Example:
    Example 1:
    Input: nums = [-1,-2,-3,-4,3,2,1]
    Output: 1
    Explanation: The product of all values in the array is 144, and signFunc(144) = 1

    Example 2:
    Input: nums = [1,5,0,2,-3]
    Output: 0
    Explanation: The product of all values in the array is 0, and signFunc(0) = 0

    Example 3:
    Input: nums = [-1,1,-1,1,-1]
    Output: -1
    Explanation: The product of all values in the array is -1, and signFunc(-1) = -1
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let product = 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0
        }
        product *= nums[i]
        // console.log('product: ', product)
    }
    return product > 0 ? 1 : -1
};

const nums1 = [-1,-2,-3,-4,3,2,1] // 1
const nums2 = [1,5,0,2,-3]        // 0
const nums3 = [-1,1,-1,1,-1]      // -1

console.log('res: ', arraySign(nums1))
console.log('res: ', arraySign(nums2))
console.log('res: ', arraySign(nums3))
