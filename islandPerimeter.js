/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  //grid[i][j]=1 - land
  //grid[i][j]=0  - water
  //this function returns number of perimeter

  let perimeterCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      perimeterCount += countPerimeter(grid, i, j);
    }
  }
  return perimeterCount;
};

//this count perimeter of one block-grid[i][j]
function countPerimeter(grid, i, j) {
  let count = 0;
  //lets check I do go out of bounce
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
    return 0;
  }

  if (grid[i][j] !== 1) {
    //this means its water i dont do anything
    return 0;
  } else {
    //its land here
    //check if there is a land downside

    if (j - 1 > 0 && grid[i][j - 1] === 1) {
      count -= 1;
    }
    //check if there is a land upside

    if (j + 1 > 0 && grid[i][j + 1] === 1) {
      count -= 1;
    }
    //check if there is a land left side

    if (i - 1 > 0 && grid[i - 1][j] === 1) {
      count -= 1;
    }
    //check if there is a land right side

    if (i + 1 > 0 && grid[i + 1][j] === 1) {
      count -= 1;
    }
    count += 4;
  }
  return count;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
