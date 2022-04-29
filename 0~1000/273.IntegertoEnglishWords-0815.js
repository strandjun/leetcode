/**
 * https://leetcode.com/problems/integer-to-english-words/description/
 *
 * Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
 */

/**
 * @param {number} num
 * @return {string}
 */

/**
 * 1. enumerate special nums
 * 2. less than thousand num function
 * 3. more than thousand num function
 */

// 1. enumerate special nums
const BASIC = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];
const HUNDRED = ["Hundred"];

// 2. less than thousand num function
var lessThanThousand = num => {
    if (num == 0) {
        return "";
    } else if (num < 20) {
        return `${BASIC[num]} `;
    } else if (num < 100) {
        let first = Math.trunc(num / 10);
        return `${TENS[first]} ${lessThanThousand(num % 10)}`;
    } else {
        let hundreds = Math.trunc(num / 100);
        return `${BASIC[hundreds]} ${HUNDRED[0]} ${lessThanThousand(num % 100)}`;
    }
};

// 3. more than thousand num function
var numberToWords = function(num) {
    if (num == 0) {
        return BASIC[0];
    }
    if (num > 2 ** 31 - 1) {
        return "";
    }
    var english = "",
        i = 0;
    while (num > 0) {
        if (num % 1000 != 0) {
            english = lessThanThousand(num % 1000) + THOUSANDS[i] + " " + english;
        }
        num = Math.trunc(num / 1000);
        i++;
    }
    return english.trim();
};

var num = 0;           // Output: "Zero"
var num = 12345678910; // out of range => Output: ""
var num = 123;         // Output: "One Hundred Twenty Three"
var num = 300;         // Output: "Three Hundred"
var num = 12345;       // Output: "Twelve Thousand Three Hundred Forty Five"
var num = 1234567;
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"

// var num = 1234567891;
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

// var num = 1000010;
// Output: "One Thousand ten"

console.log(numberToWords(num));
