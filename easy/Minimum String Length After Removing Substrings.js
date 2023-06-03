// @param {string} s
// @return {number}
// Remove only "AB" and "CD"

const example = 'ABFCACDB';

const minLength = (s) => {
  let cuttedString = s;
  const regex = /AB|CD/gi;
  const replaceABCD = (str) => str.replaceAll(regex, '');

  while (cuttedString.includes('AB') || cuttedString.includes('CD')) {
    cuttedString = replaceABCD(cuttedString);
  }

  return cuttedString.length;
};

console.log(minLength(example));
