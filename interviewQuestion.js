/**
 * @param  {string}  inputStr
 * @return {string}  [验证结果是否正确]
 * 
 * 26进制+1
 * 
 */


/**
 * 递归处理最后一位数字或字母+1
 * @param  {[string]} str          [原字符串]
 * @param  {[string]} type         [最后一位类型]
 * @type   {0:大写; 1:小写; 2:数字;} [默认为0]
 * @return {[string]}              [组合好的数组]
 */
function lastBitAdd(str, type) {

    let len = str.length,
        newStr = '';
    type = type ? type : '0';

    // 如果前面没有，则根据type进位
    if (len == 0) {
        return type == '0' ? 'A' : (type == '1' ? 'a' : '0');
    }

    // 判断是否进位,并重新确定type
    let lastStr = str[len - 1],
        lastNum;
    if (isNaN(lastStr)) {
        lastNum = lastStr.charCodeAt();
        type = lastNum > 90 ? '1' : '0';
    } else {
        lastNum = lastStr;
        type = '2';
    }

    if (lastNum == 90 || lastNum == 122 || lastNum == 9) {
        let temp = type == '0' ? 'A' : (type == '1' ? 'a' : '0');
        return lastBitAdd(str.substr(0, len - 1), type) + temp;
    } else {
        if (type == '2') {
            lastNum++;
            newStr = lastNum.toString();
        } else {
            newStr = String.fromCharCode(++lastNum);
        }
        return str.substr(0, len - 1) + newStr;
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