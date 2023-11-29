/**
Example 1:
  Input: n = 00000000000000000000000000001011
  Output: 3
  Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

Example 2:
  Input: n = 00000000000000000000000010000000
  Output: 1
  Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

Example 3:
  Input: n = 11111111111111111111111111111101
  Output: 31
  Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Solution from comments
const hammingWeight = function (n) {
  return n === 0 ? 0 : (n & 1) + hammingWeight(n >>> 1);
};

// Version with binary input as a string:
//    const str1 = '00000000000000000000000000001011';
//    const str2 = '00000000000000000000000010000000';
//    const str3 = '11111111111111111111111111111101';

//    const hammingWeight = function (n) {
//      return n.split('').reduce((a, b) => +a + +b, 0);
//    };
