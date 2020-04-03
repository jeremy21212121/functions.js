const transpose = require('./transpose2dArray.js');
const kv2dArrayToObject = (array2d) => Object.fromEntries(new Map(transpose(array2d)));

module.exports = kv2dArrayToObject;

