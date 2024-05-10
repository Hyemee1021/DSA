var isValidSoduku = function (board) {
  //check if the board is valid
  // rows have to have dictinct numbers
  checkBoard(board);

  //check column has distinct numbers
  //also 3*3 box has to have distinct numbers
  justColumn(board);
  //1-9 distinct
  //when number is not there store .

  //check row, columns, cube- valid s
};

// check if there are any duplicates and return true
//[1,2,2,3 ]
function checkDuplicate(arr) {
  //store numbers in set
  const newSet = new Set();
  //if you keep value in another array, i have to loop through to find if ther is duplicate
  for (let num of arr) {
    if (newSet.has(num)) {
      return true;
    } else {
      newSet.add(num);
    }
  }

  return false;
}

// console.log(checkDuplicate([1,1]))

function checkBoard(board) {
  for (let i = 0; i < board.length; i++) {
    if (checkDuplicate(board[i])) {
      return true;
    }
  }
  return false;
}
// console.log(checkBoard([[1,2], [1,1]]))

function checkEntireBoard(board) {
  //print all numbers
  const newSet = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // console.log(board[i][j])

      if (newSet.has(board[i][j])) {
        return true;
      } else {
        newSet.add(board[i][j]);
      }
    }
  }
  return false;
}

//  console.log(checkEntireBoard([[1,2], [1,1], [1,1,1]]))

function getThreePosition(board) {
  let threeBythree = [];

  for (let i = 0; i < board.length; i += 1) {
    //thid one goes to 9 row

    for (let j = 0; j < board[i].length; j += 3) {
      threeBythree.push([board[i][j], board[i][j + 1], board[i][j + 2]]);
      // console.log([board[i][j], board[i][j + 1], board[i][j + 2]]);
      console.log(threeBythree);
    }
  }
}

//Goal!!
//[5,3,.,6.,.,.,9,8]
getThreePosition([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
]);
//[[1,2,7,8], [1,1,2,3], [1,1,1,3]]
function justColumn(board) {
  for (let j = 0; j <= board[0].length; j++) {
    const arr = [
      board[0][j],
      board[1][j],
      board[2][j],
      board[3][j],
      board[4][j],
      board[5][j],
      board[6][j],
      board[7][j],
      board[8][j],
    ];
    // console.log(arr);
    //I make an array then I can check it
    checkDuplicate(arr);
  }
}

// justColumn([[1,2,7,8], [1,1,2,3], [1,1,1,3]])

// getThreePosition([[1,2, 4, 5], [1,1,2], [1,1,1]])
