/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //is row valid??
  for (let i = 0; i < board.length; i++) {
    if (!checkRepeat(board[i])) {
      return false;
    }
  }

  //is column valid??
  checkColumn(board);

  //is 3*3 valid??
  threeByThree(board);

  if (true && true && true) {
    return true;
  } else {
    return false;
  }
};

function checkRepeat(array) {
  //i just need to check the number appears once
  //map?? set???
  let newSet = new Set();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === ".") {
      continue;
    } else if (newSet.has(array[i])) {
      return false;
    } else {
      newSet.add(array[i]);
    }
  }
  console.log(newSet);
  return true;
}

function checkColumn(board) {
  //is column valid??
  let column = [];
  //lets make a column-
  for (let i = 0; i < board[0].length; i++) {
    //inner
    for (let j = 0; j < board.length; j++) {
      //outer
      column.push(board[j][i]);
      console.log(column);
    }
    if (!checkRepeat(column)) {
      return false;
    } else {
      //clear the column
      column = [];
    }
  }
  return true;
}

function threeByThree(board) {
  let newArray = [];
  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board[0].length; j += 3) {
      //outer

      for (let m = i; m < i + 3; m++) {
        for (let n = j; n < j + 3; n++) {
          newArray.push(board[m][n]);
        }
      }
      if (!checkRepeat(newArray)) {
        return false;
      } else {
        //clear for eash array
        newArray = [];
      }
    }
  }
  return true;
}
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
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
