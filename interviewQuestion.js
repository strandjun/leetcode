/**
 * @param {string} s
 * @return {string}
 * 
 * 26进制+1
 * 
 */

// 26进制+1
function succ(inputStr) {

    let len = inputStr.length;
    if(len <= 0){
        return;
    }
    let lastNum,newStr='';

    // 递归处理最后一位数字+1
    var numAdd = function(inputStr){
        let inputStrlen = inputStr.length;
        if(inputStrlen == 0){
            newStr = 'A' + newStr;
            return;
        }
        let str = inputStr[inputStrlen-1];
        lastNum = str.charCodeAt();
        if(lastNum == 90){
            newStr = 'A' + newStr;
            numAdd(inputStr.substr(0,inputStrlen-1));
        }else{
            newStr = String.fromCharCode(++lastNum) + newStr;
            if(inputStrlen >= 2){
                newStr = inputStr.substr(0,inputStrlen-1) + newStr;
            }
        }
    }
    numAdd(inputStr);

    return newStr;

}

function assertEq(a, b) {
    if( a == b) {
        console.log(a + "==" + b)
    } else {
        console.error(a + "!=" + b)
    }
}

assertEq(succ("AA"), "AB");
assertEq(succ("AZ"), "BA");
assertEq(succ("AZZ"), "BAA");
assertEq(succ("Z"), "AA");