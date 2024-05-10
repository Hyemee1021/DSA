/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  return getMinCoins(coins, amount);
}

// helper function
// returns minimum number of coins needed for a given amount
function getMinCoins(coins, amount) {
  //recursion needs to identify base case
  //1. amount is 0 at first place- I can get this from example
  //i return 0
  if (amount === 0) {
    return 0;
  }
  //amount is less than 0 at first place return -1
  if (amount < 0) {
    return -1;
  }

  //I need to return minimum number so I keep tract of it
  //negative integer <infinity < positive integer
  let minCoins = Infinity;
  //looping array-
  for (const coin of coins) {
    //
    const minCoinsOfNextBranch = getMinCoins(coins, amount - coin);

    if (minCoinsOfNextBranch < minCoins && minCoinsOfNextBranch > -1) {
      //      11          I need to plus 1 here
      //10   9     6   getMinCoins()<-starts from here
      minCoins = minCoinsOfNextBranch + 1;
    }
  }

  if (minCoins === Infinity) {
    //after looping there was no valid route
    // so minCoins remains Infinity
    return -1;
  } else {
    return minCoins;
  }
}
