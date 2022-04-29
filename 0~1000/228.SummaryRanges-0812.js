/**
 * https://leetcode.com/problems/summary-ranges/
 *
 * Given a sorted integer array without duplicates, return the summary of its ranges.
 */

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums || !nums.length) {
    return [];
  }

  let output = [],
    start = "",
    end = "";

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 >= nums.length) {
      if (start === "") {
        start = end = nums[i];
      } else {
        end = nums[i];
      }
      output.push(end === start ? `${start}` : `${start}->${end}`);
      start = end = "";
      break;
    }

    if (start === "") {
      start = end = nums[i];
    }

    if (nums[i] + 1 !== nums[i + 1]) {
      end = nums[i];
      output.push(end === start ? `${start}` : `${start}->${end}`);
      start = end = "";
    }
  }
  return output;
};

var input1 = [0, 1, 2, 4, 5, 7]; // ["0->2","4->5","7"]
var input2 = [0, 2, 3, 4, 6, 8, 9]; // ["0", "2->4", "6", "8->9"];

console.log(summaryRanges(input1));
console.log(summaryRanges(input2));

/**
 * Q:
 * 1. the order of the array (inc, dec ?)
 * 2. +/- no matter
 * 3. range notation, drection of the notation, follow up Q1
 * 4. what's the range of the isolated number?
 * 5. input validation, output default value
 */
