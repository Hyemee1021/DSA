function myFunction(a) {
  // a-number
  // true- no deciaml

  if (a === Math.floor(a)) {
    return true;
  }
  return false;
}

console.log(myFunction(4.4));
