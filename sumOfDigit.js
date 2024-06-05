function digitalRoot(n) {
  // ...

  return sum(n);
}

function sum(num) {
  const str = num + "";

  const length = str.length;
  let num1 = 0;
  if (length < 2) {
    return num;
  } else {
    for (let ele of str) {
      num1 += Number(ele);
    }
    return sum(num1);
  }
}
