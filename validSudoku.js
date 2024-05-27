/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //this function return this Sudoku is valid or not-true or false

  //condition1- row-
  for (let i = 0; i < board.length; i++) {
    //even one row is false the whole Sudoku is false
    if (!checkVaild(board[i])) {
      return false;
    }
  }

  //condition2 - col
  for (let j = 0; j < 9; j++) {
    //  iterate column first
    const column = [];
    for (let i = 0; i < 9; i++) {
      //then row
      column.push(board[i][j]);
    }
    //even one column is false the whole Sudoku is false
    if (!checkVaild(column)) {
      return false;
    }
  }

  //3*3

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subgrid = [];
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          subgrid.push(board[i + x][j + y]);
        }
      }
      if (!isValidSet(subgrid)) {
        return false;
      }
    }
  }
};

//have a helper function to check if there is repeatation
function checkVaild(arr) {
  let numberSet = new Set();

  for (let num of arr) {
    if (numberSet.has(".")) {
      continue;
    }
    if (numberSet.has(num)) {
      //this means there is already number existed
      return false;
    }
    numberSet.add(num);
  }
  return true; //no repeation
}
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
