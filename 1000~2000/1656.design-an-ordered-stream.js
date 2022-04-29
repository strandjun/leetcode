/**
 * https://leetcode.com/problems/design-an-ordered-stream/
 * Easy
 * 
 * Desc:
    There is a stream of n (idKey, value) pairs arriving in an arbitrary order, where idKey is an integer between 1 and n and value is a string. No two pairs have the same id.

    Design a stream that returns the values in increasing order of their IDs by returning a chunk (list) of values after each insertion. The concatenation of all the chunks should result in a list of the sorted values.

    Implement the OrderedStream class:

    OrderedStream(int n) Constructs the stream to take n values.
    String[] insert(int idKey, String value) Inserts the pair (idKey, value) into the stream, then returns the largest possible chunk of currently inserted values that appear next in the order.
 */

/**
 * Example:
    Input
    ["OrderedStream", "insert", "insert", "insert", "insert", "insert"]
    [[5], [3, "ccccc"], [1, "aaaaa"], [2, "bbbbb"], [5, "eeeee"], [4, "ddddd"]]
    Output
    [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]

    Explanation
    // Note that the values ordered by ID is ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"].
    OrderedStream os = new OrderedStream(5);
    os.insert(3, "ccccc"); // Inserts (3, "ccccc"), returns [].
    os.insert(1, "aaaaa"); // Inserts (1, "aaaaa"), returns ["aaaaa"].
    os.insert(2, "bbbbb"); // Inserts (2, "bbbbb"), returns ["bbbbb", "ccccc"].
    os.insert(5, "eeeee"); // Inserts (5, "eeeee"), returns [].
    os.insert(4, "ddddd"); // Inserts (4, "ddddd"), returns ["ddddd", "eeeee"].
    // Concatentating all the chunks returned:
    // [] + ["aaaaa"] + ["bbbbb", "ccccc"] + [] + ["ddddd", "eeeee"] = ["aaaaa", "bbbbb", "ccccc", "ddddd", "eeeee"]
    // The resulting order is the same as the order above.
 */

/**
 * @param {number} n
 */
// var OrderedStream = function(n) {};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
// OrderedStream.prototype.insert = function(idKey, value) {};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

// 差评！！！读不懂题根本...看了例子还是不懂想要干啥！！！垃圾...
class OrderedStream {
    constructor (n) {
        this.arr = new Array(n)
        this.index = 0
    }
    
    insert(idKey, value) {
        this.arr[idKey - 1] = value
        let res = []
        while (this.arr[this.index]) {
            res.push(this.arr[this.index])
            this.index++
        }
        return res
    }
};

const os = new OrderedStream(5)
// Output [null, [], ["aaaaa"], ["bbbbb", "ccccc"], [], ["ddddd", "eeeee"]]
console.log('res0: ', [
    null, 
    os.insert(3, "ccccc"), 
    os.insert(1, "aaaaa"), 
    os.insert(2, "bbbbb"), 
    os.insert(5, "eeeee"), 
    os.insert(4, "ddddd")
])


const os1 = new OrderedStream(9)
// [null,[],[],[],[],[],["mnknb","bouhq"],[],[],["oqdnf","oalee","qkxbj","mwlrz","hgeob","iydkk","nghbm"]]
console.log('res1: ', [
    null, 
    os1.insert(9, "nghbm"), 
    os1.insert(7, "hgeob"), 
    os1.insert(6, "mwlrz"), 
    os1.insert(4, "oalee"), 
    os1.insert(2, "bouhq"), 
    os1.insert(1, "mnknb"), 
    os1.insert(5, "qkxbj"), 
    os1.insert(8, "iydkk"), 
    os1.insert(3, "oqdnf")
])
