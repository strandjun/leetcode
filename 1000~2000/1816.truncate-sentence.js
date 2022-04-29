/**
 * https://leetcode.com/problems/truncate-sentence/
 * Easy
 * 
 * Desc:
    A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

    For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
    You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
 */

/**
 * Example:
    Example 1:
    Input: s = "Hello how are you Contestant", k = 4
    Output: "Hello how are you"
    Explanation:
    The words in s are ["Hello", "how" "are", "you", "Contestant"].
    The first 4 words are ["Hello", "how", "are", "you"].
    Hence, you should return "Hello how are you".

    Example 2:
    Input: s = "What is the solution to this problem", k = 4
    Output: "What is the solution"
    Explanation:
    The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
    The first 4 words are ["What", "is", "the", "solution"].
    Hence, you should return "What is the solution".

    Example 3:
    Input: s = "chopper is not a tanuki", k = 5
    Output: "chopper is not a tanuki"
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    // Runtime: 80ms  Memorey: 38.7MB
    // let space = 0
    // let res = ''
    // for (let i = 0; i < s.length; i++) {
    //     if (s.charAt(i) === ' ') {
    //         space++
    //     }
    //     if (space === k) {
    //         return res
    //     }
    //     res += s.charAt(i)
    // }
    // return res


    // Not sure why this method is faster than the one above?
    // Runtime: 72ms  Memorey: 38.7MB
    let space = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            space++
        }
        if (space === k) {
            return s.substring(0, i)
        }
    }
    return s
};

const s = "Hello how are you Contestant", k = 4            // Output: "Hello how are you"
const s1 = "What is the solution to this problem", k1 = 4  // Output: "What is the solution"
const s2 = "chopper is not a tanuki", k2 = 5               // Output: "chopper is not a tanuki"

console.log('res0: ', truncateSentence(s, k))
console.log('res1: ', truncateSentence(s1, k1))
console.log('res2: ', truncateSentence(s2, k2))
