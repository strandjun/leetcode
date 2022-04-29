/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * Easy
 * 
 * Desc:
    A pangram is a sentence where every letter of the English alphabet appears at least once.

    Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
 */

/**
 * Example:
    Example 1:
    Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
    Output: true
    Explanation: sentence contains at least one of every letter of the English alphabet.

    Example 2:
    Input: sentence = "leetcode"
    Output: false
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length < 26) {
        return false
    }
    const obj = {}
    for (let i = 0; i < sentence.length; i++) {
        if (Object.keys(obj).length === 26) {
            return true
        }
        if (obj[sentence[i]]) {
            continue
        }
        obj[sentence[i]] = 1
    }
    return Object.keys(obj).length === 26 ? true : false
};

const sentence = "thequickbrownfoxjumpsoverthelazydog" // Output: true
const sentence1 = "leetcode"                           // Output: false

console.log('res0: ', checkIfPangram(sentence))
console.log('res1: ', checkIfPangram(sentence1))
