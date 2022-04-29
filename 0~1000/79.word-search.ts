/**
 * https://leetcode.com/problems/word-search/
 * Medium - 79. Word Search
 */

function exist(board: string[][], word: string): boolean {
    const rowLen = board.length
    const colLen = board[0].length

    const backtracking = (board: string[][], i: number, j: number, word: string, pos: number): boolean => {
        // find the word
        if (pos == word.length) {
            return true
        }
        // out of boundary
        if (i < 0 || j < 0 || i >= rowLen || j >= colLen) {
            return false
        }
        // wrong character
        if (board[i][j] != word[pos]) {
            return false
        }

        // mark the character
        board[i][j] = '*'

        // try 4 directions
        const nextFlag = (
            backtracking(board, i + 1, j, word, pos + 1) ||
            backtracking(board, i, j + 1, word, pos + 1) ||
            backtracking(board, i - 1, j, word, pos + 1) ||
            backtracking(board, i, j - 1, word, pos + 1)
        )
        // reset the character
        board[i][j] = word[pos]

        return nextFlag
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (backtracking(board, i, j, word, 0)) {
                return true
            }
        }
    }

    return false
}

/**
 * Time Complexity: O(M * N * 3^L)
 * Space Complexity: O(L)
   where L is the length of the word

   Space Complexity is because of recursion - to store function stack context.
   Time Complexity - from every block we go in three adjacent blocks (avoiding the direction we came from). 
   This walk can go for max of L times. So each thred at most goes L length long. -> O(3^L). 
   Now this is applied at each node from main calling function -> O(M * N). 
   Therefore, O(M * N * 3^L).
 */

/**
More detailed explanation:
About time complexity:
   This is more like backtracking, shares the search idea of DFS. 
   In pure DFS, when you mark some node as visited, you never remark it. So the complexity is indeed O(n). 
   But in this case, at a given state, we must search into all possible directions, and maintain the original search state by resetting visited status, so you "backtrack". Now, this will change everything.

About space complexity:
   The worst case is when the length of the word takes up whole board i.e, L = m*n
   Since you are doing dfs, call stack will be at most min (m * n, length of word) coz each time you are searching only one path as deep as you can.
*/


import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        exist(
            [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
            "ABCCED"
        ),
        true
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        exist(
            [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
            "SEE"
        ),
        true
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(
        exist(
            [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
            "ABCB"
        ),
        false
    );
});
