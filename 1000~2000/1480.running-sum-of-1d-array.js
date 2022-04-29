/**
 * https://leetcode.com/problems/running-sum-of-1d-array/
 * easy
 * 
 * Desc:
    Given an array nums. 
    We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.
 */

/**
 * Example:
   Example 1:
   Input: nums = [1,2,3,4]
   Output: [1,3,6,10]
   Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


   Example 2:
   Input: nums = [1,1,1,1,1]
   Output: [1,2,3,4,5]
   Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


   Example 3:
   Input: nums = [3,1,2,10,1]
   Output: [3,4,6,16,17]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
   let res = [nums[0]]
   for (let i = 1; i < nums.length; i++) {
      let sum = res[i - 1] + nums[i]
      res.push(sum)
      // console.log('i, sum, res: ', i, sum, res)
   }
   return res
};

const nums1 = [1,2,3,4]
const nums2 = [1,1,1,1,1]
const nums3 = [3,1,2,10,1]

console.log(runningSum(nums1))
console.log(runningSum(nums2))
console.log(runningSum(nums3))
