function dnaStrand(dna){

  //input- string "ATTGC"
//can I loop though String?
//A-> T, T->A
//G -> c, C->G
//ineed to manipulate - array??
let newArr = dna.split("")
//newArr
// [ 'A', 'T', 'T', 'G', 'C' ]
for(let  i= 0 ; i< newArr.length; i++ ){
if(newArr[i]=== "A"){
  newArr[i] = "T"
}else if(newArr[i]=== "T"){
  newArr[i] = "A"
}
else if(newArr[i]=== "C"){
  newArr[i] = "G"

}else {
  newArr[i] = "C"
}
}
// [ 'A', 'T', 'T', 'G', 'C' ]
//array-> str
  //return string "TAACG"
  return newArr.join("")
}

console.log( dnaStrand("ATTGC"))