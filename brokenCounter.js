function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};
// In JavaScript, when defining methods on a prototype, you need to use the assignment operator (=) instead of a pair of parentheses (()). The corrected code uses the correct syntax for defining methods on the Counter prototype. Now, you can create instances of Counter and use its methods as expected.
