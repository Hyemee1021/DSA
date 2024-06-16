/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  //obj -{}, []
  let newArray = [];
  //Array.isArray()-check if obj is an array
  if (Array.isArray(obj)) {
    return (newArray = obj.filter((item) => {
      //check if there is nested array
      if (Array.isArray(item)) {
        return compactObject(item) > 0;
      }
      return Boolean(item);
    }));
  } else if (obj !== null && typeof obj === "object") {
  }
};

console.log(compactObject([null, 0, false, 1]));
