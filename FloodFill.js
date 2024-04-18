/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    
  const startingP = image[sr][sc];

  //avoiding visiting the same pixels I have already vitied
  const visited=[]
  //make an the same size array full of false 
  for( let i =0; i < image.length; i++){//this makes rows
    //this makes columns
    //there must be the first row- 
    visited[i]= Array(image[0].length).fill(false)

  }

  fill(image, sr, sc, color, startingP, visited)

return image
};

//this functuin will fill pixels
function fill(image, curR, curC, color, startingP, visited){
//base case1 - out of bounce
if(curR <0 || curR > image.length-1 || curC < 0 || curC> image[0].length-1 ){
  return;
}
//base case 2-already visited
if(visited[curR][curC]=== true){
  return ;
}

//base case 3- the pixel is not same as starting pixel

if(image[curR][curC] !== startingP){
  return ;
}
image[curR][curC]= color
visited[curR][curC]= true

fill(image, curR+1, curC, color, startingP, visited)
fill(image, curR-1, curC, color, startingP, visited)
fill(image, curR, curC+1, color, startingP,visited)
fill(image, curR, curC-1, color, startingP,visited)
}