function myFunction(a, b) {
  if (b in a && a[b]) {
    return true;
  } else {
    return false;
  }
}
console.log(myFunction({ x: "a", b: "b", z: undefined }, "z"));
