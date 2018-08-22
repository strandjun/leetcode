/**
 * 第二道高频题 Log file
 * sort一个logfile，logfile是用id+空格+数据的形式组成的. 数据可能全是数字or全是字母
 * 把全是字母的数据，按照lexicographical的顺序排序。把全是数字的，按照出现在源文件里面的先后顺序排序
 * 然后把全是字母的行，放到全是数字的行之前。
 *
 * @param {number} size
 * @param {array} logs
 * @return {string}
 */

/**
 * step1. data structure => class Log
 * step2. compare log.data or log.id
 */

let Log = class Log {
    constructor(id, data) {
        this.id = id;
        this.data = data;
    }
};
// main function
function reOrderLog(size, logs) {
    let newCharLogs = [],
        newNumLogs = [];
    // scan logs file data
    for (let i = 0; i < size; i++) {
        let index = logs[i].indexOf(" "),
            id = logs[i].substring(0, index),
            data = logs[i].substring(index + 1);
        if (!isNaN(data[0])) {
            // if number
            newNumLogs.push(logs[i]);
        } else {
            // if letter
            newCharLogs.push(new Log(id, data));
        }
    }
    newCharLogs.sort(compareStr);
    newCharLogs.forEach(function(val, key) {
        newCharLogs[key] = val.id + " " + val.data;
    });
    newCharLogs = newCharLogs.concat(newNumLogs);
    return newCharLogs;
}
// compare letters function
function compareStr(a, b) {
    if (a.data === b.data) {
        return a.id > b.id;
    } else {
        return a.data > b.data;
    }
}

var logFileSize = 5,
    logLines = [
        "a1 9 2 3 1",
        "g1 act car",
        "zo4 4 7",
        "ab1 off key dog",
        "a8 act zoo"
    ];
/*
Output: 
[g1 act car]
[a8 act zoo]
[ab1 off key dog]
[a1 9 2 3 1]
[zo4 4 7]
*/

console.log(reOrderLog(logFileSize, logLines));
