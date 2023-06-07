/**
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const fullString = 'sadbutsad';
const subString = 'sad';

const strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};

console.log(strStr(fullString, subString));
