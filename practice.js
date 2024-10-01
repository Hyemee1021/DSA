function myFunction(a, b) {
  if (a.includes(b)) {
    return b + a;
  } else {
    return a + b;
  }
}
// check a contains b
//yes - b comes front a
//no-a+b

console.log(myFunction("cheese", "cake"));
