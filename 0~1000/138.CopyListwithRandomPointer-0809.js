/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/description/
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 *
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

// recursive
function copyRandomList_NO1(head) {
    return copy(head, {});
}

function copy(node, map) {
    if (!node) return node;
    if (map[node.label]) return map[node.label];

    let n = new RandomListNode(node.label);

    map[node.label] = n;

    n.next = copy(node.next, map);
    n.random = copy(node.random, map);

    return n;
}

/**
 * desc:
 * other, get it!
 * first turn into array(value,index)
 * second scan array,value next & random
 */
var copyRandomList_NO2 = function(head) {
    if (!head) return null;

    let hash = new Map();
    let newArr = [];
    let node = head;

    while (node) {
        hash.set(node, newArr.length);
        newArr.push(new RandomListNode(node.label));
        node = node.next;
    }

    node = head;
    for (let i = 0, len = newArr.length; i < len; i++) {
        if (i !== len - 1) newArr[i].next = newArr[i + 1];

        let random = node.random;
        let index = hash.get(random);
        if (index !== undefined) {
            newArr[i].random = newArr[index];
        }

        node = node.next;
    }

    return newArr[0];
};


// study version
var copyRandomList_NO3 = function(head) {
    if (!head) return null;
    const dummy = new RandomListNode();
    const map = new Map();

    let src = head;
    let dest = dummy;
    while (src && !map.has(src)) {
        dest.next = new RandomListNode(src.label);
        map.set(src, dest.next);
        src = src.next;
        dest = dest.next;
    }

    for (let [src, dest] of map) {
        dest.random = map.get(src.random) || null;
    }

    return dummy.next;
};


// study version
var copyRandomList_NO4 = function(head) {
    let nodesTable = new Map(),
        preNewHead = new RandomListNode(),
        prevNewNode = preNewHead;
    next = head;

    let getOrCreateNode = node => {
        if (nodesTable.has(node)) {
            return nodesTable.get(node);
        }

        let newNode = new RandomListNode(node.label);
        nodesTable.set(node, newNode);

        return newNode;
    };

    while (next) {
        let node = getOrCreateNode(next);

        if (next.random) {
            node.random = getOrCreateNode(next.random);
        }

        prevNewNode.next = node;
        prevNewNode = node;
        next = next.next;
    }

    return preNewHead.next;
};

var head = new RandomListNode();
head.label = -1;
head.next = head.random = -1;
// var head = {-1,-1}; //output: {-1,-1}
console.log(copyRandomList_NO1(head));
console.log(copyRandomList_NO2(head));
console.log(copyRandomList_NO3(head));
console.log(copyRandomList_NO4(head));
