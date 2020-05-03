const range = (start, end) => Array.from(Array(end - start + 1)).map((v, i) => i + start)

module.exports = range
