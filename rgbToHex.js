/*
  Array of RGB colour values to hex string, without '#' prefix
  Implemented using map/reduce
*/

const rgbToHex = rgbArray =>
  rgbArray
    .map(n =>
      n.toString(16)) // map to hex string
    .reduce((a,b) => a + b); // concat strings

module.exports = rgbToHex;

