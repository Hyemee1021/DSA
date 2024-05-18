/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (checkRow(board) && checkColumn(board) && checkSmallBox(board)) {
    return true;
  } else {
    return false;
  }
};

//checking duplicate-single array
function checkDuplicate(arr) {
  let newMap = new Map();

  //return true- id there is duplicate
  for (let num of arr) {
    if (num === ".") {
      continue;
    }
    if (newMap.has(num)) {
      return true;
      //there is duplicate
    }

    newMap.set(num, true);
  }
  return false;
  //there is no duplicate
}
//check 2dimention array-checking rows
function checkRow(board) {
  for (let i = 0; i < board.length; i++) {
    if (checkDuplicate(board[i])) {
      //checkDuplicate is true-> there is a duplicate
      return false;
      //so it is not vaild
    }
  }
  return true;
  //there is no duplicate
}
// console.log(checkRow([[1, 2, 3, 4]]));
//check column
function checkColumn(board) {
  let twoDArr = [];
  for (let i = 0; i < board[0].length; i++) {
    //loop through subArray first
    let columnArr = [];
    //reseting new columnArr
    for (let j = 0; j < board.length; j++) {
      columnArr.push(board[j][i]);
    }
    twoDArr.push(columnArr);
  }

  if (checkRow(twoDArr)) {
    return true;
  } else {
    return false;
  }
}

function checkSmallBox(board) {
  let twoDArr = [];

  // There are 9 subgrids in a 9x9 Sudoku board
  for (let startRow = 0; startRow < 9; startRow += 3) {
    for (let startCol = 0; startCol < 9; startCol += 3) {
      let threebythree = [];
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          threebythree.push(board[startRow + row][startCol + col]);
        }
      }
      twoDArr.push(threebythree);
    }
  }

  if (checkRow(twoDArr)) {
    return true;
    //no duplicate
  } else {
    return false;
  }
}
