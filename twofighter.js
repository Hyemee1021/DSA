function declareWinner(fighter1, fighter2, firstAttacker) {
  //return name of winner
  //health <= 0 <- loose
  //fighter- obj
  //firstAttacker-string
  let currentAttacker = firstAttacker;
  //loop both health have to > 0
  while (fighter1.health > 0 && fighter2.health > 0) {
    //switch attacker-keep track of attack

    if (fighter1.name === currentAttacker) {
      fighter2.health -= fighter1.damagePerAttack;
      //5-2=== 3
      //change attacker
      currentAttacker = fighter2.name;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      //10-4===6
      currentAttacker = fighter1.name;
    }
  }

  if (fighter1.health <= 0) {
    //return name of a winner
    return fighter2.name;
  } else {
    return fighter1.name;
  }
}

function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))