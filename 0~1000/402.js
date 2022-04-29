/**
 * https://leetcode.com/problems/remove-k-digits/#/description
 * @param {string} num
 * @param {number} k
 * @return {string}
 */


/**
 * 兔思路1：比较数字，从第一位开始跟第二、三、四位进行比较   XXXXX!!!
 * 兔思路2：跟数组中最小的数字进行比较，若大则删除，若相等则比较位数
 * 兔思路3：数组排序，取出前k个最小的数字，若不在其中，则删除……
 * 兔思路4：数组排序，取出前k个或len-k个最小的数字…
 * 兔思路5：这次一定是对的！！！len-k每位都取可取的最小的数值，并记录index……
 * string array傻傻分不清楚 /(ㄒoㄒ)/~~
 */
// var removeKdigits = function (num, k) {
//     let len = num.length;
//     if (len >= 10002 || len < k || len <= 0) {
//         return false;
//     }
//     if (len == k) {
//         return "0";
//     }
//     if (k == 0) {
//         return num;
//     }
//     // 获取数组最小值的index
//     let minFun = (arr, n) => {
//         let ss = arr.concat();
//         ss = ss.splice(0, n);
//         ss.sort();
//         let index = arr.indexOf(ss[0]);
//         return index;
//     }
//     num = num.split("");
//     // 得到要展示的位数
//     let showNum = len - k,
//         newArr = [],
//         tempArr = num.concat();

//     for (let i = showNum; i > 0; i--) {
//         let arrLen = tempArr.length,
//             n = arrLen - (i - 1),
//             index = minFun(tempArr, n);
//         if (index + 1 == n) {
//             newArr = newArr.concat(tempArr.splice(index, i));
//             i = 0;
//             newArr = newArr.join('');
//             if (newArr.replace(/0/g, "") != '') {
//                 newArr = newArr.replace(/\b(0+)/gi, "");
//             } else {
//                 newArr = '0';
//             }
//             return newArr;
//         }
//         newArr.push(tempArr[index]);
//         tempArr.splice(0, index + 1);
//     }

//     newArr = newArr.join('');
//     if (newArr.replace(/0/g, "") != '') {
//         newArr = newArr.replace(/\b(0+)/gi, "");
//     } else {
//         newArr = '0';
//     }
//     return newArr;
// };


// 参考别人的改进版……
var removeKdigits = function (num, k) {
    let delMaxOne = (str) => {
        for (let i = 0; i < str.length - 1; i++) {
            if (+str[i] > +str[i + 1]) {
                return str.substr(0, i) + str.substr(i + 1);
            }
        }
        return str.substr(0, str.length - 1);
    };
    for (let i = k; i > 0; i--) {
        num = delMaxOne(num);
    }

    for (let j = 0; j < num.length; j++) {
        if (num[j] != '0') {
            return num.substr(j);
        }
    }
    return '0';
}

// let num = "52660469", k = 2;
let num = "1432219", k = 3;
// let num = "5626046980890909888009890898908079879", k = 2;
// let num = "10200", k = 1;
// let num = "10", k = 1;
// let num = "100", k = 1;
console.log(removeKdigits(num, k));