//I need to study

function nextHigher(n) {
  let c = n;
  let c0 = 0; // Count of trailing zeros
  let c1 = 0; // Count of trailing ones

  // Count trailing zeros
  while ((c & 1) === 0 && c !== 0) {
    c0++;
    c >>= 1;
  }

  // Count trailing ones
  while ((c & 1) === 1) {
    c1++;
    c >>= 1;
  }

  // If n is like 111...0000, then there is no bigger number with the same number of 1s
  if (c0 + c1 === 31 || c0 + c1 === 0) {
    return -1;
  }

  // Position of rightmost non-trailing zero
  let p = c0 + c1;

  // Step 2: Flip the rightmost non-trailing zero
  n |= 1 << p; // Flip the rightmost non-trailing zero
  n &= ~((1 << p) - 1); // Clear all bits to the right of p
  n |= (1 << (c1 - 1)) - 1; // Insert (c1-1) ones on the right

  return n;
}

console.log(nextHigher(6)); // Output: 7
