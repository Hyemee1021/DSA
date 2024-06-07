class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  //YOUR CODE HERE...
  //draft-total ship weight
  //crew- number of human- adds 1.5 units
  //after removing crews-when draft 20 >= then worth of looting
  //method-return boolean
  isWorthIt() {
    const unit = 1.5;
    const draftAfter = this.draft - this.crew * unit;

    if (this.draft - draftAfter >= 20) {
      return true;
    } else {
      return false;
    }
  }
}
