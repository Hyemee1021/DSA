function spinWords(string){
  //input string-many words inside
    //words >= 5 letters -> backwards

    //"Hey fellow warriors" ->make it to array
    let newArray = string.split(" ");
    //newArr= ["hey", "fellow","warriors"]-length to check 
    //numbers of letters
    //newArr[0].length= loop the newArr
    //length >= 5 yes-?-helper function
      //newArr= ["hey", "fellow","warriors"]
    for( let i =0 ; i< newArray.length; i++){
      if ( newArray[i].length >= 5){
        
        //i get reverse string
        //replace it
        newArray[i] = reverse(newArray[i])
      }

    }
    //newArray-> string-I dont want them one word
    return newArray.join(" ")
// replace with reversed str-> newArr[0] = reversed str
//arr-> str

  //return changed same string
  
}

//backwards????-helper function-
//sting-> array??
//from string.length-for loop i--
// function reverse(str){
//   //"abcd"
//   //from back to beginning
//   const length = str.length-1;
//   //3
//   let result =""

//   for(let i = length; i >= 0; i--){
//     result += str[i]; 
//   }
//   //return reversed string
//   return result;
// }
function reverse(str){
  //str->arr
  let array = str.split('')
  //reverse it-array->string
  return array.reverse().join('')

}

console.log(spinWords("Hey fellow warriors" ))