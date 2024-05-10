/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {};

function checkRow(board) {
  //using set-can get number constant time
  const newSet = new Set();

  for (let row of board) {
    //im in each row
    for (let i = 0; i < row.length; i++) {
      //im in number

      if (newSet.has(row[i])) {
        return true;
      } else {
        newSet.add(row[i]);
      }
    }
  }
  return false;
}
checkRow([
  [1, 2, 3, 4],
  [1, 2, 2, 3],
  [3, 4, 5, 6],
  [6, 6, 7, 8],
]);
