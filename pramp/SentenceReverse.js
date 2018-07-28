/**
Sentence Reverse
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.
*/

/** Example:
input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/

/**
Constraints:

[time limit] 5000ms

[input] array.character arr

0 ≤ arr.length ≤ 100
[output] array.character
*/

// tu initial version
function reverseWords(arr) {
    let arrBegin=0, newArr=[], k=0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            newArr[k] = arr.slice(arrBegin,i);
            arrBegin = i+1;
            k++;
        }
    }
    newArr.push(arr.slice(arrBegin,arr.length))
    // 不知道reverse、concat里做了什么，不知道空间、时间复杂度，所以最好不用…
    newArr.reverse();
    console.log(newArr.join(' | '));
    // newArr = Array.prototype.concat.apply([], newArr);
    newArr = [].concat(...newArr); //将数组转为函数的参数
    // newArr = [].concat(newArr);
    return newArr;
}

// update version
function upReverseWords(arr) {
    let wordNum = [],
        arrNew = [],
        arrLen = arr.length;
    // wordNum.push(-1);
    for (let i = 0; i < arrLen; i++) {
        if (arr[i] === " ") {
            wordNum.push(i);
        }
    }
    wordNum.push(arr.length);
    // console.log(wordNum, arr.length);
    for (let j = wordNum.length - 1; j >= 0; j--) {
        if (j > 0) {
            arrNew = arrNew.concat(arr.slice(wordNum[j - 1] + 1, wordNum[j]), [" "]);
        } else if (j === 0) {
            arrNew = arrNew.concat(arr.slice(0, wordNum[j]));
        }
    }
    return arrNew;
}

// yuri version
function yrReverseWords(arr) {
    var indexArr = [];

    var start = 0,
        end = 0;
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (char === " ") {
            end = i;
            indexArr.push([start, end]);
            start = i + 1;
        }
    }
    indexArr.push([start, arr.length]);

    var result = [];
    for (let i = indexArr.length - 1; i >= 0; i--) {
        const [start, end] = indexArr[i];

        for (let index = start; index < end; index++) {
            result.push(arr[index]);
        }
        if (i != 0) {
            result.push(" ");
        }
    }
    return result;
}

let arr = [
    "p", "e", "r", "f", "e", "c", "t", " ",
    "m", "a", "k", "e", "s", " ",
    "p", "r", "a", "c", "t", "i", "c", "e"
];
// console.log(yrReverseWords(arr));
// console.log(upReverseWords(arr));
console.log(reverseWords(arr));


/**
 * 时间、空间复杂度 @yr：
时间复杂度只有 N，在时间复杂度上是最优解了

平时说的 “几个for循环” 是指嵌套的，会导致时间复杂度加倍
但这里第一第二个for是并列的，时间复杂度还是N
第二个for里边虽然还有一个for循环，但要注意外部这个for循环是循环一个小数组，有几个单词才会循环几次，和字符数N相比可以忽略不计，要计入的只有里边的循环，而那个循环起点终点都不重合，也就是说也只遍历了一次N
所以最终还是N

所以时间、空间复杂度都是N
*/
