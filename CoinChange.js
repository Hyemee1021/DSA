/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */ function coinChange(coins, amount) {
  return getMinCoins(coins, amount);
}

// helper function
// returns minimum number of coins needed for a given amount
function getMinCoins(coins, amount) {
  if (amount === 0) {
    return 0;
  }

  if (amount < 0) {
    return -1;
  }

  let minCoins = Infinity;
  for (const coin of coins) {
    const minCoinsOfNextBranch = getMinCoins(coins, amount - coin);

    if (minCoinsOfNextBranch < minCoins && minCoinsOfNextBranch > -1) {
      minCoins = minCoinsOfNextBranch + 1;
    }
  }

  if (minCoins === Infinity) {
    return -1;
  } else {
    return minCoins;
  }
}
