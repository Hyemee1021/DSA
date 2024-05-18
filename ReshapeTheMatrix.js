/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    //m * n=> different size r* c
    
    //row column
    //new size matrix=> all the old elements
    //traverse order-same
//if parameter-possible-return new matrix
//or return original


//[1,2,3,4]


// matric m*n=> one Array=> r*C array
//m * n !== r* c ??? return mat
// [[1,2],[1,2]]
const m = mat.length;
const n = mat[0].length


if((m*n) !== (r*c) ){
  return mat
}

//make one array
let oneArr = [];

for(let i =0; i< mat.length;i++ ){
  for( let j =0; j < mat[0].length; j++){
   oneArr.push(mat[i][j])
  }
}


//r*C array
let multiArr= []
let index=0
for(let i =0; i < r; i++){
  //making an empty arr
  multiArr[i] =[]

  for( let j =0; j< c; j++){
    //put 0 in every elelments position

    //oneArr - start from 0
  
 
    multiArr[i][j]=oneArr[index]

    index++
  }
}

return multiArr;


};


matrixReshape([[1,2],[3,4]], 2, 4)