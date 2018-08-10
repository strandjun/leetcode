/**
 * Number to words
 * Easy:
 * input number[1…1000] return english words length,space is not counted.
 */

/**
 * step:
 * 1 map singleNum、specialNum
 * 2 judge num then switch
 */
var numberToWords = function(num) {
    num = num.toString();
    const singleNum = new Map([
        ["1", "one"],
        ["2", "two"],
        ["3", "three"],
        ["4", "four"],
        ["5", "five"],
        ["6", "six"],
        ["7", "seven"],
        ["8", "eight"],
        ["9", "nine"]
    ]);
    const twoSpecialNum = new Map([
        ["10", "ten"],
        ["11", "eleven"],
        ["12", "twelve"],
        ["13", "thirteen"],
        ["14", "fourteen"],
        ["15", "fifteen"],
        ["16", "sixteen"],
        ["17", "seventeen"],
        ["18", "eighteen"],
        ["19", "nineteen"]
    ]);
    const twoNum = new Map([
        ["2", "twenty"],
        ["3", "thirty"],
        ["4", "forty"],
        ["5", "fifty"],
        ["6", "sixty"],
        ["7", "seventy"],
        ["8", "eighty"],
        ["9", "ninety"]
    ]);

    const numLen = num.length;

    let singleNumFun = num => {
        return singleNum.get(num);
    };
    let twoNumFun = num => {
        if (num == "00") {
            return "";
        }
        if (twoSpecialNum.has(num)) {
            return twoSpecialNum.get(num);
        }
        const first = num.charAt(0);
        let tmpStr = twoNum.get(first);
        if (num.charAt(1) != "0") {
            tmpStr += singleNum.get(num.charAt(1));
        }
        return tmpStr;
    };
    let threeNumFun = num => {
        if (num == "000") {
            return "";
        }
        const first = singleNumFun(num.charAt(0));
        let tmpStr = `${first}hundred`;
        let ss = twoNumFun(num.substr(1));
        if (ss) {
            tmpStr = `${tmpStr}and${ss}`;
        }
        return tmpStr;
    };
    let fourNumFun = num => {
        const first = singleNumFun(num.charAt(0));
        let tmpStr = `${first}thousand`;
        let ss = threeNumFun(num.substr(1));
        if (ss) {
            tmpStr = `${tmpStr}${ss}`;
        }
        return tmpStr;
    };

    switch (numLen) {
        case 1:
            return singleNumFun(num);
        // return singleNumFun(num).length;
        case 2:
            return twoNumFun(num);
        // return twoNumFun(num).length;
        case 3:
            return threeNumFun(num);
        // return threeNumFun(num).length;
        case 4:
            return fourNumFun(num);
        // return fourNumFun(num).length;
    }
};

var num = 1990; // output one:3
// var num = 290; // output two:3
// var num = 300; // output three:5
// var num = 123; // output one hundred and twenty three:24
console.log(numberToWords(num));

/**
 * Similar Questions:
 *
 * 273.IntegertoEnglishWords.js
 * https://leetcode.com/problems/integer-to-english-words/description/
 *
 */
