/**
 * Input: nums = [1,15,6,3]
 * Output: 9
 * Explanation:
 * The element sum of nums is 1 + 15 + 6 + 3 = 25.
 * The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
 * The absolute difference between the element sum and digit sum is |25 - 16| = 9.
 *
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 15, 6, 3];

const differenceOfSum = (nums) => {
  const elemSum = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const nestedArray = nums
    .map((elem) => elem.toString())
    .map((elem) => elem.split(''));

  const digitSum = []
    .concat(...nestedArray)
    .map((elem) => +elem)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return Math.abs(elemSum - digitSum);
};

console.log(differenceOfSum(nums));
