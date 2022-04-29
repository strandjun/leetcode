/**
 * https://leetcode.com/problems/reverse-string/#/description
 * @param {string} s
 * @return {string}
 * 
 * Write a function that takes a string as input and returns the string reversed.
 * Example:
 * Given s = "hello", return "olleh".
 */

/**
 * 常规数组姿势
 */
// var reverseString = function(s) {
//     return s.split('').reverse().join('');
// };

/**
 * 常规遍历方法，取第二个方法
 */
var reverseString = function (s) {
    let newStr = '';
    for (let i = s.length - 1; i >= 0; i--) {
        newStr += s[i];
    }
    return newStr;
};

/**
 * 递归，如果字符串巨长，那就消耗巨大的空间
 */
// var reverseString = function (s) {
//     if(s == ''){
//         return '';
//     }else{
//         return reverseString(s.substr(1))+ s.charAt(0);
//     }
// }; 

var s = '!iruy,olleh'

console.log(reverseString(s));