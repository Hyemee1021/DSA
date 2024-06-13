const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // nearest pump-integer 50
  //integer  25 meters per gallon
  //integer 2 gallons
  //return boolean
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  }
  return false;
};

console.log(zeroFuel(50, 25, 2));
