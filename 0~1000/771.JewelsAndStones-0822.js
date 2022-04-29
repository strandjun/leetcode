/**
 * https://leetcode.com/problems/jewels-and-stones/
 * easy
 * 
 You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
 
 The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

 Note:
    S and J will consist of letters and have length at most 50.
    The characters in J are distinct.
 */

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// using Set should be a good solution
var numJewelsInStones = function(J, S) {

};
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  if (!jewels.length || !stones.length) {
      return 0;
  }
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
      if (jewels.includes(stones[i])) {
        count++;
      }
  }
  return count;

  // let JSet = new Set()
  // for (let i = 0; i < jewels.length; i++) {
  //     JSet.add(jewels[i])
  // }
  // let count = 0
  // for (let i = 0; i < stones.length; i++) {
  //     count += JSet.has(stones[i]) ? 1 : 0
  // }
  // return count
};

var J0 = "aA", S0 = "aAAbbbb"; // 3
var J1 = "z", S1 = "ZZ"; // 0

console.log(numJewelsInStones(J0, S0));
console.log(numJewelsInStones(J1, S1));
console.assert(numJewelsInStones(J0, S0) === 3, ['Correct'])
console.assert(numJewelsInStones(J1, S1) === 0, ['Correct'])

/**
 * Q:
 * 1. is blank? if blank, output 0?
 */
