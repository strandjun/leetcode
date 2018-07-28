/**
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 * @param {number[]} heights
 * @return {number}
 * Largest Rectangle in Histogram 直方图中最大的矩形
 */

/**
 * Example:
 * Input: [2,1,5,6,2,3]
 * Output: 10
 */

/**
 * NO.1 最冗余鸡肋版 - 可以过小数据，大数据超时
 * 不用计算最小值…
 */
var largestRectangleArea_NO1 = function(heights) {
    let maxArea;
    if (heights.length > 0) {
        maxArea = heights[0];
    } else {
        return 0;
    }
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j <= heights.length; j++) {
            let tempArea = minLength(heights.slice(i, j)) * (j - i);
            if (tempArea > maxArea) {
                maxArea = tempArea;
            }
        }
    }
    return maxArea;
};
var minLength = arr => {
    let minNum = arr[0];
    for (let k = 0; k < arr.length - 1; k++) {
        if (arr[k] < arr[k + 1] && arr[k] < minNum) {
            minNum = arr[k];
        } else if (arr[k + 1] < minNum) {
            minNum = arr[k + 1];
        }
    }
    return minNum;
};

/**
 * NO.2 学习改进版-基础款 - 可以过小数据，大数据超时
 * 时间复杂度是O(n*n)
 */
var largestRectangleArea_NO2 = heights => {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let minH = heights[i];
        // console.log(`i: ${i}, heights[i]: ${heights[i]}`);
        for (let j = i; j >= 0; j--) {
            minH = heights[j] < minH ? heights[j] : minH;
            let tempArea = minH * (i - j + 1);
            if (tempArea > maxArea) {
                maxArea = tempArea;
            }
            // console.log(`j: ${j}, minH: ${minH}, maxArea: ${maxArea}`);
        }
    }
    return maxArea;
};

/**
 * NO.3 学习改进版 - 可以过大数据
 * 时间复杂度是O(n*n)
 * 最终还是这个啊…
 */
var largestRectangleArea_NO3 = heights => {
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        if (!(i + 1 < heights.length && heights[i] <= heights[i + 1])) {
            let minH = heights[i];
            // console.log(`i: ${i}, heights[i]: ${heights[i]}`);
            for (let j = i; j >= 0; j--) {
                minH = heights[j] < minH ? heights[j] : minH;
                let tempArea = minH * (i - j + 1);
                if (tempArea > maxArea) {
                    maxArea = tempArea;
                }
                // console.log(`j: ${j}, minH: ${minH}, maxArea: ${maxArea}`);
            }
        }
    }
    return maxArea;
};

/**
 * NO.4 引进一个递增的栈，把整个height变成一组组“波峰图”来比较最大面积
 * 参考：https://www.cnblogs.com/felixfang/p/3676193.html
 * 时间复杂度是O(n)?
 * ???我的第三个demo都过不了???
 */
var largestRectangleArea_NO4 = heights => {
    let maxArea = 0;
    let stackArr = [];
    for (let i = 0; i < heights.length; i++) {
        if ( stackArr.length == 0 || heights[i] >= stackArr[stackArr.length - 1] ) {
            stackArr.push(heights[i]);
            // console.log(`stackArr1: ${stackArr}`);
        } else {
            let minH,
                width = 0;
            while (heights[i] < stackArr[stackArr.length - 1]) {
                // console.log(`stackArr2: ${stackArr}`);
                let last = stackArr[stackArr.length - 1];
                minH = minH && minH < last ? minH : last;
                width++;
                // console.log(`maxArea: ${maxArea}, minH * width: ${minH * width}`);
                maxArea = minH * width > maxArea ? minH * width : maxArea;
                stackArr.pop();
            }
        }
    }
    return maxArea;
};

// var heights = [];
// var heights = [2, 1, 5, 6, 2, 3];
var heights = [1, 3, 2, 1, 1, 1, 3];

// console.log(largestRectangleArea_NO1(heights));
// console.log(largestRectangleArea_NO2(heights));
console.log(largestRectangleArea_NO3(heights));
// console.log(largestRectangleArea_NO4(heights));
