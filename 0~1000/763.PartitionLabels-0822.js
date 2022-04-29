/**
 * https://leetcode.com/problems/partition-labels/
 * medium
 * 
 * 
   A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const sMap = new Map();
  for (let i in S) {
    sMap.set(S[i], i);
  }
  let partition = [],
    tempStart = "",
    tempEnd = "";

  for (let i = 0; i < S.length; i++) {
    if (tempStart === "") {
      tempStart = tempEnd = i;
    }
    if (sMap.get(S[i]) - i > 0 && sMap.get(S[i]) - tempEnd > 0) {
      tempEnd = sMap.get(S[i]);
    }
    if (i === +tempEnd) {
      partition.push(S.slice(+tempStart, +tempEnd + 1).length);
      tempStart = tempEnd = "";
    }
  }
  return partition;
};

var S = "ababcbacadefegdehijhklij"; // [9,7,8] The partition is "ababcbaca", "defegde", "hijhklij".

console.log(partitionLabels(S));

/**
 * Runtime: 56 ms, faster than 96.16% of JavaScript online submissions for Partition Labels.
 * Memory Usage: 37.2 MB, less than 8.33% of JavaScript online submissions for Partition Labels.
 */
