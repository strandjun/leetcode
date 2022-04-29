/**
 * https://leetcode.com/problems/backspace-string-compare/description/
 * #20180807
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// reverse scan
// scan every string, have two various and foolean various

var backspaceCompare_NO1 = function(S, T) {
    const scanStr = function(str) {
        let tmpStr = "";
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) !== "#") {
                tmpStr += str.charAt(i);
            } else {
                tmpStr = tmpStr.substring(0, tmpStr.length - 1);
            }
            // console.log(`i: ${i}, tmpStr: ${tmpStr}`);
        }
        // console.log(`str: ${str} => tmpStr: ${tmpStr}`);
        return tmpStr;
    };
    if (scanStr(S) == scanStr(T)) {
        return true;
    }
    return false;
};

var backspaceCompare = function(S, T) {
    const getString = s => {
        let count = 0,
            ans = "";

        for (let i = s.length - 1; i >= 0; i--) {
            if (s.charAt(i) === "#") {
                count++;
            } else if (count > 0) {
                count--;
            } else if (count === 0) {
                ans = s.charAt(i) + ans;
            }
        }
        return ans;
    };
    return getString(S) === getString(T);
};

var backspaceCompare = function(S, T) {
let s = S;
    while (true) {
        let newS = s.replace(/[^#]#/g, '');
        if (newS.length == s.length) {
            break;
        }
        s = newS;
    }
    
    let t = T;
    while (true) {
        let newT = t.replace(/[^#]#/g, '');
        if (newT.length == t.length) {
            break;
        }
        t = newT;
    }
    
    return s.replace(/#/g, '') === t.replace(/#/g, '');
}

var S = "ab#c",
    T = "ad#c";
// Output: true
// Explanation: Both S and T become "ac"

var S = "ab##",
    T = "c#d#";
// Output: true
// Explanation: Both S and T become "".

var S = "a##c",
    T = "#a#c";
// Output: true
// Explanation: Both S and T become "c".

var S = "a#c",
    T = "b";
// Output: false
// Explanation: S becomes "c" while T becomes "b".

var S = "oi###mupo##rszty#s#xu###bxx##dqc#gdjz",
    T = "oi###mu#ueo##pk#o##rsztu#y#s#xu###bxx##dqc#gz#djz";
// Output: true
// Explanation:

// console.log(backspaceCompare_NO1(S, T));
console.log(backspaceCompare(S, T));
