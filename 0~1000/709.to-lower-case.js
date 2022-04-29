/**
 * https://leetcode.com/problems/to-lower-case/
 * Easy
 * 
 * Desc:
    Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 */

/**
 * Example:
    Example 1:
    Input: "Hello"
    Output: "hello"

    Example 2:
    Input: "here"
    Output: "here"

    Example 3:
    Input: "LOVELY"
    Output: "lovely"
 */

/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            newStr += String.fromCharCode(str.charCodeAt(i) + 32)
        } else {
            newStr += str[i]
        }
    }
    return newStr
};

const str = "Hello"   // Output: "hello"
const str1 = "here"   // Output: "here"
const str2 = "LOVELY" // Output: "lovely"


console.log('res0: ', toLowerCase(str))
console.log('res1: ', toLowerCase(str1))
console.log('res2: ', toLowerCase(str2))
