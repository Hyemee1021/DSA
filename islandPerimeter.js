// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var islandPerimeter = function (grid) {
//   //grid[i][j]=1 - land
//   //grid[i][j]=0  - water
//   //this function returns number of perimeter

//   let perimeterCount = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       perimeterCount += countPerimeter(grid, i, j);
//     }
//   }
//   return perimeterCount;
// };

// //this count perimeter of one block-grid[i][j]
// function countPerimeter(grid, i, j) {
//   let count = 0;
//   //lets check I do go out of bounce
//   if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) {
//     return 0;
//   }

//   if (grid[i][j] !== 1) {
//     //this means its water i dont do anything
//     return 0;
//   } else {
//     //its land here
//     //check if there is a land downside

//     if (j - 1 > 0 && grid[i][j - 1] === 1) {
//       count -= 1;
//     }
//     //check if there is a land upside

//     if (j + 1 > 0 && grid[i][j + 1] === 1) {
//       count -= 1;
//     }
//     //check if there is a land left side

//     if (i - 1 > 0 && grid[i - 1][j] === 1) {
//       count -= 1;
//     }
//     //check if there is a land right side

//     if (i + 1 > 0 && grid[i + 1][j] === 1) {
//       count -= 1;
//     }
//     count += 4;
//   }
//   return count;
// }

// console.log(
//   islandPerimeter([
//     [0, 1, 0, 0],
//     [1, 1, 1, 0],
//     [0, 1, 0, 0],
//     [1, 1, 0, 0],
//   ])
// );

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let perimeterCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        perimeterCount += countPerimeter(grid, i, j);
      }
    }
  }

  return perimeterCount;
};

function countPerimeter(grid, i, j) {
  let count = 0;

  // Check left
  if (j - 1 >= 0 && grid[i][j - 1] === 0) {
    count += 1;
  }

  // Check right
  if (j + 1 < grid[i].length && grid[i][j + 1] === 0) {
    count += 1;
  }

  // Check up
  if (i - 1 >= 0 && grid[i - 1][j] === 0) {
    count += 1;
  }

  // Check down
  if (i + 1 < grid.length && grid[i + 1][j] === 0) {
    count += 1;
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
