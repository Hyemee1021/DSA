function myFunction(a) {
  let max = 0;
  let longest = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i].length > max) {
      max = a[i].length;
      longest = a[i];
    }
  }
  return longest;
}

console.log(myFunction(["help", "me"]));
