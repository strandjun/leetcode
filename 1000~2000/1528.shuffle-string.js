/**
 * https://leetcode.com/problems/shuffle-string/
 * easy
 * 
 * Desc:
    Given a string s and an integer array indices of the same length.

    The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

    Return the shuffled string.
    
 */

/**
 * Example:
    Example 1:
    Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
    Output: "leetcode"
    Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
    
    Example 2:
    Input: s = "abc", indices = [0,1,2]
    Output: "abc"
    Explanation: After shuffling, each character remains in its position.
    
    Example 3:
    Input: s = "aiohn", indices = [3,1,4,2,0]
    Output: "nihao"
    
    Example 4:
    Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
    Output: "arigatou"
    
    Example 5:
    Input: s = "art", indices = [1,0,2]
    Output: "rat"
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    if (s.length !== indices.length) {
        return s
    }
    let res = []
    for (let i = 0; i < indices.length; i++) {
        res[indices[i]] = s[i]
    }
    // console.log('res: ', res)
    return res.join('')
};

const s1 = "codeleet", indices1 = [4,5,6,7,0,2,1,3] // "leetcode"
const s2 = "abc", indices2 = [0,1,2]                // "abc"
const s3 = "aiohn", indices3 = [3,1,4,2,0]          // "nihao"
const s4 = "aaiougrt", indices4 = [4,0,2,6,7,3,1,5] // "arigatou"
const s5 = "art", indices5 = [1,0,2]                // "rat"

console.log('res1: ', restoreString(s1, indices1))
console.log('res2: ', restoreString(s2, indices2))
console.log('res3: ', restoreString(s3, indices3))
console.log('res4: ', restoreString(s4, indices4))
console.log('res5: ', restoreString(s5, indices5))
