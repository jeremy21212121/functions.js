/*
  Turns a string into an array of character code values
*/

const stringToCharCodeArray = string => string.split('').map(ch => ch.charCodeAt(0))

module.exports = stringToCharCodeArray

