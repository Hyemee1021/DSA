/*
* DYNAMIC COIN CHANGE PROBLEM
* Recursive DFS 
* TOP DOWN Dynamic programming solution
* it takes the amount and minuses by each coin denomination until reaching 0;
* BUT, it memoises the solution of the method and stores it in an array to prevent uneeded calculations
*/

function coinChange(coins, amount) {
  /*
  * EMPTY MEMO ARRAY
  * The index will be the amount
  * The value will be the min number of coins needed
  * E.g memo[amount] => gives minNumCoins for that amount
  */
  const memo = [];
  // we add memo as an argument to our helper function
  return getMinCoins(coins, amount, memo);
}

// helper function
// returns minimum number of coins needed for a given amount
function getMinCoins(coins, amount, memo)  
{
  if (amount === 0) {
      // 0 coins needed to add up to total of 0
      return 0;
  }

  if (amount < 0) {
      // this means that we have subtracted from the amount past 0, so the combination of coins we have used doesn't add up to the total
      // hence return -1 according to the problem statement
      return -1;
  }

  /*
  *  ADDITIONAL BASE CASSE
  *  if we have a previously found solution in memo,
  *  then we'll just return that value which gives us the minCoins of that amount
  *  instead of calculating again
  */
  if (memo[amount] !== undefined) {
      return memo[amount];
  }

  let minCoins = Infinity;
  for (const coin of coins) {
      const minCoinsOfNextBranch = getMinCoins(coins, amount-coin, memo);
      // checks if minCoins of the branch is less, therefore update
      // however only do so if the values are greater than -1, and therefore valid combinations
      if (minCoinsOfNextBranch < minCoins && minCoinsOfNextBranch > -1) {
          // minCoinsOfNextBranch is of the NEXT BRANCH, and doesn't include the coin needed from CURRENT level, hence add 1
          minCoins = minCoinsOfNextBranch + 1;
      }
  }

  /*
  * So far we have checked if we have a memoised solution.
  * but we haven't updated it yet when we do find a solution.
  * From the above block of code, we have found minCoins, which we want to store as a solution
  */ 

  // so far we update minCoins ONLY IF we have found a mininum coins.
  // this means minCoins, could still remain as Infinity
  if (minCoins === Infinity) {
      // if minCoins is infinity, then we haven't found a valid combinaton of coins
      // we store -1 in the memorised solutions if it is invalid combination
      memo[amount] = -1;
  } else {
      memo[amount] = minCoins; // store minCoins as usual
  }

  // in the above block we have placed the answer in memo[amount], so we just that answer in memo[amount];
  return memo[amount]; 
}

console.log(coinChange([1,2,5], 100)); // expect 20
// this algorithm is efficient enough to do 100 as an amount with 3 denominations