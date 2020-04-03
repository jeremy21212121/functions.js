const transpose = (arr2d) => arr2d[0].map((col, i) => arr2d.map(row => row[i]));

module.exports = transpose;

