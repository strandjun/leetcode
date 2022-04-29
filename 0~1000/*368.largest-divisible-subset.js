/**
 * https://leetcode.com/problems/largest-divisible-subset/
 * Medium
 * 
 * Desc:
    Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:

    answer[i] % answer[j] == 0, or
    answer[j] % answer[i] == 0
    If there are multiple solutions, return any of them.
 */

/**
 * Example:
    Example 1:
    Input: nums = [1,2,3]
    Output: [1,2]
    Explanation: [1,3] is also accepted.

    Example 2:
    Input: nums = [1,2,4,8]
    Output: [1,2,4,8]
 */

/**
 * Constraints:
    1 <= nums.length <= 1000
    1 <= nums[i] <= 2 * 109
    All the integers in nums are unique.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset1 = function(nums) {
    if (nums.length < 2) {
        return nums
    }
    nums.sort((a,b) => a - b)

    let output = []
    let tmp = []
    let flag = false

    for (let i = 0; i < nums.length; i++) {
        tmp.push([nums[i]])

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] % nums[i] == 0) {
                if (tmp.length) {
                    tmp.forEach((item, index) => {
                        if (nums[j] % item[item.length - 1] == 0 && nums[j] != item[item.length - 1]) {
                            tmp.push([...item, nums[j]])
                            flag = true
                        }
                    })
                    
                    if (!flag) {
                        tmp.push([nums[i], nums[j]])
                    }

                    flag = false
                } else {
                    tmp.push([nums[i], nums[j]])
                }
            }
        }
        
    }

    console.log('tmp: ', tmp)

    tmp.forEach((item) => {
        if (item.length > output.length) {
            output = item
        }
    })
    return output
};

var largestDivisibleSubset = function (nums) {
    if (!nums.length) return [];
    nums.sort((a, b) => a - b);
    var dp = Array.from({ length: nums.length }, (_, i) => [nums[i]]);
  
    console.log('nums: ', nums);
    console.log('dp: ', dp);
  
    for (let i = nums.length - 1; i >= 0; i--) {
      for (let j = i + 1; j < nums.length; j++) {
        if (dp[i].length <= dp[j].length && dp[j][0] % nums[i] === 0) {
          dp[i] = [nums[i], ...dp[j]];
        }
      }
      console.log('dp' + i + ': ', dp);
    }
  
    // console.log('dp: ', dp);
    return dp.reduce((a, x) => (a.length > x.length ? a : x));
  };

const nums  = [1,2,3]   // Output: [1,2]
const nums0 = [1]   // Output: [1]
const nums1 = [1,2,4,8] // Output: [1,2,4,8]
const nums2 = [1,2,3,4,9,18] // Output: [1,3,9,18]
const nums3 = [3,4,7,9,14,28] // Output: [7,14,28]
const nums4 = [3,28] // Output: [3]
const nums5 = [5,9,18,54,108,540,90,180,360,720] // [9,18,90,180,360,720]

// console.log('res: ', largestDivisibleSubset(nums))
// console.log('res0: ', largestDivisibleSubset(nums0))
// console.log('res1: ', largestDivisibleSubset(nums1))
console.log('res2: ', largestDivisibleSubset(nums2))
// console.log('res3: ', largestDivisibleSubset(nums3))
// console.log('res4: ', largestDivisibleSubset(nums4))
// console.log('res5: ', largestDivisibleSubset(nums5))
