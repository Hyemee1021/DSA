/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let profit=0
  let buy= prices[0]

  for(let i=1; i< prices.length-1; i++){
    if( buy > prices[i]){
      buy= prices[i];
    }

    profit = prices[i] - buy;

  }
    return profit;
};