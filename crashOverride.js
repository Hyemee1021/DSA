function aliasGen(firstWord, lastWord){

  //lets check thr first letter is charactor or I can just return a message
  //'Your name must start with a letter from A - Z.'


  //two string- need to get the first letter 
  let first = firstWord[0] 
  let first2 = lastWord[0];

  
    // first letter of the first name-one word
  //first name of the surname -one words
  //need to find a value of key(alphabet)-in obj

   if(firstName[first]){
    first = firstName[first]
   }

   if(surname[first2]){
    first2 = surname[first2]
   }
  
return first + " " + first2;
 

  //any of words dont start with A-Z then return "Your name must start with a letter from A - Z."
}
console.log(aliasGen("Cike", "Aillington"))

function checkAlphabet(char){
  return /^[A-Za-z]$/.test(char);

}