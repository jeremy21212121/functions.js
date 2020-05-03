// round decimal number `n` to `places` decimal places
const roundTo = (n, places) => Math.round(n * 10 ** places) / 10 ** places;

module.exports = roundTo;

