/**
 * https://leetcode.com/problems/battleships-in-a-board/
 * Medium
 */

function countBattleships1(board: string[][]): number {
    let count = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                continue
            }
            if (i === 0 && j === 0) {
                count++
                board[i][j] = count.toString()
            } else if (i === 0 && j > 0) {
                if (board[i][j - 1] === '.') {
                    count++
                    board[i][j] = count.toString()
                } else {
                    board[i][j] = board[i][j - 1]
                }
            } else if (i > 0 && j === 0) {
                if (board[i - 1][j] === '.') {
                    count++
                    board[i][j] = count.toString()
                } else {
                    board[i][j] = board[i - 1][j]
                }
            } else {
                if (board[i - 1][j] === '.' && board[i][j - 1] === '.') {
                    // new
                    count++
                    board[i][j] = count.toString()
                } else if (board[i - 1][j] !== '.') {
                    board[i][j] = board[i - 1][j]
                } else if (board[i][j - 1] !== '.') {
                    board[i][j] = board[i][j - 1]
                }
            }

        }
    }

    return count
}


function countBattleships(board: string[][]): number {
    let count = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === '.') {
                continue
            }
            if (i > 0 && board[i - 1][j] === 'X') {
                continue
            }
            if (j > 0 && board[i][j - 1] === 'X') {
                continue
            }
            count++
        }
    }

    return count
}

import { assertEquals } from "https://deno.land/std@0.102.0/testing/asserts.ts";

Deno.test("assertEquals Test", () => {
    assertEquals(
        countBattleships(
            [["X", ".", ".", "X"],
            [".", ".", ".", "X"],
            [".", ".", ".", "X"]]
        ),
        2
    );
});

Deno.test("assertEquals Test", () => {
    assertEquals(countBattleships([["."]]), 0);
});
