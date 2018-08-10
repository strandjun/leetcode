String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

function succ(inputStr) {
    if(inputStr.isEmpty()) {
        return inputStr
    }
    return incr(inputStr, inputStr.length -1, true)
}

function incr(str, i) {
    if(i < 0) {
        if (str[0] == '0') {
            return '1' + str
        }
        return str[0] + str
    }
    var retObj = incrChar(str[i])
    str = str.substr(0, i) + retObj.newChar+ str.substr(i + retObj.newChar.length)
    if(!retObj.isIncr) {
        return str
    }
    return incr(str, i-1)
}

function incrChar(char) {
    switch(char) {
        case 'Z': 
            return {newChar:'A',isIncr:true}
        case 'z': 
            return {newChar:'a',isIncr:true}
        case '9': 
            return {newChar:'0',isIncr:true}
        default:
            return {newChar:String.fromCharCode(char.charCodeAt() + 1),isIncr:false}
    }
}

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
assertEq(succ("zz"),  "aaa", '11:zz    ');
assertEq(succ("9z"),  "10a", '12:9z    ');