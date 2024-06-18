function searchMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  // Start from the top-right corner
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true; // Found the target
    } else if (matrix[row][col] < target) {
      row++; // Move downwards in the same column
    } else {
      col--; // Move leftwards in the same row
    }
  }

  return false; // Target not found
}
