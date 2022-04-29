/**
 * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
 * easy
 * 
 * Desc:
    Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

    A string is represented by an array if the array elements concatenated in order forms the string.
 */

/**
 * Example:
    Example 1:
    Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
    Output: true
    Explanation:
    word1 represents string "ab" + "c" -> "abc"
    word2 represents string "a" + "bc" -> "abc"
    The strings are the same, so return true.

    Example 2:
    Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
    Output: false

    Example 3:
    Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
    Output: true
 */

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join("") === word2.join("")
};

const word1 = ["ab", "c"], word2 = ["a", "bc"]            // Output: true
const word1_1 = ["a", "cb"], word2_1 = ["ab", "c"]            // Output: false
const word1_2  = ["abc", "d", "defg"], word2_2 = ["abcddefg"] // Output: true

console.log('res0: ', arrayStringsAreEqual(word1, word2))
console.log('res1: ', arrayStringsAreEqual(word1_1, word2_1))
console.log('res2: ', arrayStringsAreEqual(word1_2, word2_2))
