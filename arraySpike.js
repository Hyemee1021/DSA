function arraySpike(arr) {
  const n = arr.length;
  if (n === 0) return 0;

  let maxSpike = 0;

  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i,
        right = i;

      // Expand left
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }

      // Expand right
      while (right < n - 1 && arr[right] > arr[right + 1]) {
        right++;
      }

      // Calculate the length of the spike
      maxSpike = Math.max(maxSpike, right - left + 1);
    }
  }

  return maxSpike;
}

console.log(arraySpike([2, 5, 3, 2, 4, 1])); // Output: 4
