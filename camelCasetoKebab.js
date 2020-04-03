const camelToKebab = (str) =>
  str.split('')
    .filter(val => /[A-Za-z0-9]/.test(val)) // remove any non-alpha characters
    .map(val =>
      (val.toLocaleLowerCase() === val) ? val : '-' + val.toLocaleLowerCase()) // lowercase and prefix the uppercase letters
    .reduce((a, b) => a + b);

module.exports = camelToKebab;

