/**
 * https://leetcode.com/problems/buddy-strings/description/
 * Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    // 比较长度
    if (A.length != B.length) {
        return false;
    }
    let len = A.length;
    // 比较完全相等的情况
    if (A === B) {
        let tmpObj = {};
        for (let i = 0; i < len; i++) {
            if (tmpObj[A[i]]) {
                return true;
            }
            tmpObj[A[i]] = 1;
        }
        return false;
    }
    let diff = [],
        swap = false;
    // 循环记录差异数
    for (let i = 0; i < len; i++) {
        if (A[i] != B[i]) {
            if (swap) {
                return false;
            }
            diff.push({ valA: A[i], valB: B[i] });
            if (diff.length > 2) {
                return false;
            } else if (diff.length == 2) {
                if (diff[0].valA != diff[1].valB || diff[1].valA != diff[0].valB) {
                    return false;
                }
                swap = true;
            }
        }
    }
    return swap;
};

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStringsYuri = function(A, B) {
    if (A.length != B.length) {
        return false;
    }
    if (A === B) {
        var dic = {};
        for (var i = 0; i < A.length; i++) {
            if (dic[A[i]] !== undefined) {
                return true;
            }
            dic[A[i]] = 1;
        }
        return false;
    }
    var diffA = [];
    var diffB = [];
    var swap = false;
    for (var i = 0; i < A.length; i++) {
        if (A[i] === B[i]) {
            continue;
        }
        if (swap) {
            return false;
        }
        diffA.push(A[i]);
        diffB.push(B[i]);
        if (diffA.length > 2) {
            return false;
        } else if (diffA.length == 2) {
            if (diffA[0] != diffB[1] || diffA[1] != diffB[0]) {
                return false;
            }
            swap = true;
        }
    }
    return swap;
};

var A = "ab",
    B = "ba"; // Output: true
var A = "ab",
    B = "ab"; // Output: false
var A = "aa",
    B = "aa"; // Output: true
var A = "aaaaaaabc",
    B = "aaaaaaacb"; // Output: true
var A = "",
    B = "aa"; // Output: false
var A = "ab",
    B = "ca"; // Output: false
console.log(buddyStrings(A, B));
