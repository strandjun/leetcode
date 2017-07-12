/**
 * @param  {string}  inputStr
 * @return {string}  [验证结果是否正确]
 * 
 * 26进制+1
 * 
 */


/**
 * 递归处理最后一位数字或字母+1
 * @param  {[string]} str    [原字符串]
 * @param  {[string]} last   [进位字符]
 * @return {[string]}        [组合好的字符串]
 */
function lastBitAdd(str,last) {

    let len = str.length;
    if(len == 0){
        return last;
    }

    let lastStr = str[len - 1];

    // +1
    switch (lastStr) {
        case 'Z':
            return lastBitAdd(str.substr(0, len - 1),'A') + 'A';
            break;
        case 'z':
            return lastBitAdd(str.substr(0, len - 1),'a') + 'a';
            break;
        case '9':
            return lastBitAdd(str.substr(0, len - 1),'1') + '0';
            break;
        default:
            return str.substr(0, len - 1) + String.fromCharCode(lastStr.charCodeAt()+1);
    }
}

// 26进制+1调用
function succ(inputStr) {
    if (inputStr.trim() == '') {
        return inputStr;
    }
    return lastBitAdd(inputStr);
}

// 结果呈现
function assertEq(a, b, s) {
    if (a == b) {
        console.log(s + a + "==" + b)
    } else {
        console.error(s + a + "!=" + b)
    }
}

assertEq(succ("AA"),  "AB",  '1:AA   ');
assertEq(succ("AZ"),  "BA",  '2:AZ   ');
assertEq(succ("AZZ"), "BAA", '3:AZZ  ');
assertEq(succ("Z"),   "AA",  '4:Z    ');
assertEq(succ(" "),   " ",   '5:     ');
assertEq(succ("Aa"),  "Ab",  '6:Aa   ');
assertEq(succ("Az"),  "Ba",  '7:Az   ');
assertEq(succ("A9"),  "B0",  '8:A9   ');
assertEq(succ("A99"), "B00", '9:A99  ');
assertEq(succ("A59"), "A60", '10:A59 ');
assertEq(succ("9z"),  "10a", '12:9z  ');

