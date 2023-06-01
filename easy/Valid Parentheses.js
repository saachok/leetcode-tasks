/**
 * @param {string} s
 * @return {boolean}
 */

let s = '[({])}';

const isValid = (s) => {
  const splittedString = s.split('');
  let result = false;

  if (!splittedString.length) {
    result = false;
  }

  const isClosed = (openBrace, closeBrace) => {
    const openedBraces = splittedString.filter((elem) => elem === openBrace);
    const closedBraces = splittedString.filter((elem) => elem === closeBrace);

    if (openedBraces.length === closedBraces.length) {
      return true;
    } else {
      return false;
    }
  };

  const isValidPosition = (openBrace, closeBrace) => {
    if (
      splittedString.indexOf(openBrace) > -1 &&
      splittedString.indexOf(closeBrace) > -1
    ) {
      const openIndex = splittedString.indexOf(openBrace);
      const closeIndex = splittedString.indexOf(closeBrace);

      const openBraceDuplicate = splittedString.lastIndexOf(openBrace);
      const closeBraceDuplicate = splittedString.lastIndexOf(closeBrace);

      if (
        closeBraceDuplicate > openBraceDuplicate &&
        (closeIndex - openIndex) % 2 === 1 &&
        (closeBraceDuplicate - openBraceDuplicate) % 2 === 1
      ) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  const allClosed =
    isClosed('(', ')') && isClosed('{', '}') && isClosed('[', ']');

  const allPositionValid =
    isValidPosition('(', ')') &&
    isValidPosition('{', '}') &&
    isValidPosition('[', ']');

  if (allClosed && allPositionValid) {
    result = true;
  }

  return result;
};

console.log(s);
console.log(isValid(s));
