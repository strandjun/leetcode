/**
 * https://www.hackerrank.com/challenges/simple-array-sum?h_r=next-challenge&h_v=zen
 * 
 */

function sumFun(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
};

function main() {
    // arr = readLine().split(' ');
    var arr = [1,2,3,4,10,11];
        arr = arr.map(Number);

    console.log(sumFun(arr));
}

main();