/**
 * https://leetcode.com/problems/anagrams/#/description
 * @param {string[]} strs
 * @return {string[][]}
 * groupAnagrams 同字母异序词
 */

var groupAnagrams = function(strs) {
    var sortStrFun = function(str){
        if(str.length <= 0){
            return;
        }
        var arr = str.split("");
            arr.sort();
        return arr.join("");
    }

    var temp = [],
        obj = {};
    
    for(var i=0; i<strs.length; i++){
        var si = sortStrFun(strs[i]);
            temp[i] = [];

        if(obj[si]){

        }else{
            temp[i].push(strs[i]);
        }

        for( var j=strs.length-1; j>i; j--){
            var sj = sortStrFun(strs[j]);
            if(si == sj){
                temp[i].push(strs[j]);
                strs.splice(j,1);
            }
        }
    }
    for(var k=0; k<temp.length; k++){
        temp[k].sort();
    };
    return temp;
};

var arrExp = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arrExp));