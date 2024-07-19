/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //prices-array
  //prices[i] stock 0f ith day

  //lowest stock to buy -before day
  //higest stock to sell - later day

  let minimum = prices[0];
  let maximum = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimum) {
      minimum = prices[i];
    } else {
      //prices[i] is bigger
      let current = prices[i] - minimum;
      maximum = Math.max(current, maximum);
    }
  }

  //return maximum profit
  return maximum;
};

//                    b, s
//                       b, s
//                       b     ,s
//                       b         s
//
//                           b
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
