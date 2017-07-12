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
 * @return {[string]}              [组合好的字符串]
 */
function lastBitAdd(str) {

    let len = str.length,
        type = '';

    // 判断末位类型type，并转化为数字
    let lastStr = str[len - 1],
        lastNum;
    if (isNaN(lastStr)) {
        lastNum = lastStr.charCodeAt();
        type = lastNum > 90 ? '1' : '0';
    } else {
        lastNum = lastStr;
        type = '2';
    }

    // +1
    if (lastNum == 90 || lastNum == 122 || lastNum == 9) {
        // if Z|z|9，则 A|a|0, 继续
        if(len == 1){
            lastNum = type == '0' ? 'AA' : (type == '1' ? 'aa' : '10');
            return lastNum;
        }else{
            lastNum = type == '0' ? 'A' : (type == '1' ? 'a' : '0');
            return lastBitAdd(str.substr(0, len - 1)) + lastNum;
        }
    } else {
        // +1, return result
        lastNum++;
        if (type != '2') {
            lastNum = String.fromCharCode(lastNum);
        }
        return str.substr(0, len - 1) + lastNum;
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