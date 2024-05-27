/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  //image is 2d array
  //start  floodfill from image[sr][sc]<-starting pixcel = color is 1
  //4 directions connected
  //among 4 directions with the same color-> change color given
  //i need to return array
  //what color do I have?? are the neighbors the same color?
  let existingC = image[sr][sc];
  //I dont have to visit the same picxel
  let visited = [];
  //I wiil make 2d array full with false
  for (let i = 0; i < image.length; i++) {
    //make 2d array size as image[i].length and elements are false
    visited = new Array(image[i].length).fill(false);
  }
  //i need to return changed 2 d array
  //this helper function will change either change color of picxel or stay the same
  helper(image, sr, sc + 1, existingC, color, visited);
  helper(image, sr + 1, sc, existingC, color, visited);
  helper(image, sr, sc - 1, existingC, color, visited);
  helper(image, sr - 1, sc, existingC, color, visited);
  return image;
};

//helper function will check 4 direction of one picxel
function helper(image, cc, cr, existingC, color, visited) {
  //check row is in bounce- image.length

  //check column is in bounce- image[0].length
  if (cr >= image.length || cc >= image[0].length || cc < 0 || cr < 0) {
    return;
  }
  //check if image[][] is visited before
  if (visited[cr][cc] || image[cr][cc] !== existingC) {
    return;
  }

  image[cr][cc] = color;
  visited[cr][cc] = true;

  //lets check 4 direction of one picxel
  helper(image, cc + 1, cr, existingC, color, visited);
  helper(image, cc, cr + 1, existingC, color, visited);
  helper(image, cc, cr - 1, existingC, color, visited);
  helper(image, cc - 1, cr, existingC, color, visited);
}
//image.length = 3
//image[0].length = 3
//[[1 1 1 ], [1 1 1], [1 1 1 ]]
console.log(
  floodFill(
    (image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]),
    (sr = 1),
    (sc = 1),
    (color = 2)
  )
);
