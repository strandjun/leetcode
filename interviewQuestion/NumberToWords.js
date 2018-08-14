/**
 * Number to words
 * Easy:
 * input number[1…1000] return english words length, space is not counted.
 */

// step1. enumerate special nums
const BASIC = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const HUNDRED = ["Hundred"];

// step2. less Than Thousand func
var lessThanThousand = num => {
    if (num == 1000) {
        return "onethousand";
    } else if (num > 1000 || num < 1) {
        return "";
    } else if (num < 20) {
        return BASIC[num];
    } else if (num < 100) {
        let tens = Math.trunc(num / 10);
        return TENS[tens] + BASIC[num % 10];
    } else {
        let hundreds = Math.trunc(num / 100),
            words = "";
        if (num % 100 != 0) {
            words = BASIC[hundreds] + HUNDRED[0] + "and" + lessThanThousand(num % 100);
        } else {
            words = BASIC[hundreds] + HUNDRED[0];
        }
        return words;
    }
};
var numToWords = (num) => {
    let words = lessThanThousand(num);
    return words.length;
}

var num = 2; // output two:3
var num = 300; // output three hundred: 12
var num = 123; // output one hundred and twenty three: 24
var num = 1001; // output '': 0
// console.log(lessThanThousand(num));
console.log(numToWords(num));

/**
 * Similar Questions: 273.IntegertoEnglishWords.js
 * https://leetcode.com/problems/integer-to-english-words/description/
 */
