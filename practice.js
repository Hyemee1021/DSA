function myFunction(a, b) {
  // a, b  - string
  //in b how manyh times a occures
  return b.split(a).length - 1;
}

console.log(
  myFunction("m", "how many times does the character occur in this sentence?")
);
