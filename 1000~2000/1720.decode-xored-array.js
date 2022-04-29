/**
 * https://leetcode.com/problems/decode-xored-array/
 * easy
 * 
 * Desc:
    There is a hidden integer array arr that consists of n non-negative integers.

    It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

    You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

    Return the original array arr. It can be proved that the answer exists and is unique.
 */

/**
 * Example:
    Example 1:
    Input: encoded = [1,2,3], first = 1
    Output: [1,0,2,1]
    Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

    Example 2:
    Input: encoded = [6,2,7,3], first = 4
    Output: [4,2,0,7,4]
 */

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let res = [first]
    for(let i = 0; i < encoded.length; i++) {
        res.push(+res[i] ^ encoded[i])
    }
    return res
};

const encoded1 = [1,2,3], first1 = 1   // Output: [1,0,2,1]
const encoded2 = [6,2,7,3], first2 = 4 // Output: [4,2,0,7,4]

console.log('res1: ', decode(encoded1, first1))
console.log('res2: ', decode(encoded2, first2))

/**
 * z = x ^ y
 * x = (x ^ y) ^ y
 * y = (x ^ y) ^ x
 */