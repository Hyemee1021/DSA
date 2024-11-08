function myFunction(obj) {
  for (let ele in obj) {
    if ((ele = "b")) {
      delete obj.b;
    }
  }
  return obj;
}
console.log(myFunction({ a: 1, b: 2, c: 3 }));
