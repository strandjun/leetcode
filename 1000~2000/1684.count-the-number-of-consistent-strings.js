/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * Easy
 * 
 * Desc:
    You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

    Return the number of consistent strings in the array words.
 */

/**
 * Example:
    Example 1:
    Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
    Output: 2
    Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

    Example 2:
    Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
    Output: 7
    Explanation: All strings are consistent.

    Example 3:
    Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
    Output: 4
    Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
 */

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        let j = 0
        while (j < words[i].length) {
            if (!allowed.includes(words[i][j])) {
                break
            }
            j++
        }
        if (j === words[i].length) {
            count++
        }
    }
    return count
};

const allowed = "ab", words = ["ad","bd","aaab","baa","badab"]              // Output: 2
const allowed1 = "abc", words1 = ["a","b","c","ab","ac","bc","abc"]         // Output: 7
const allowed2 = "cad", words2 = ["cc","acd","b","ba","bac","bad","ac","d"] // Output: 4

console.log('res0: ', countConsistentStrings(allowed, words))
console.log('res1: ', countConsistentStrings(allowed1, words1))
console.log('res2: ', countConsistentStrings(allowed2, words2))
