/**
 * Input: nums1 = [1,2,3], nums2 = [2,4,6]
 * Output: [[1,3],[4,6]]
 * Explanation:
 * For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
 * For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const arr1 = [1, 2, 3, 3];
const arr2 = [1, 1, 2, 2];
// answer = [[1, 3], [4, 6]]

// const findDifference = (nums1, nums2) => {
//   const answer = [[], []];
//   const firstArr = nums1.filter((elem) => !nums2.includes(elem));
//   const secondArr = nums2.filter((elem) => !nums1.includes(elem));
//   answer[0].push(firstArr);
//   answer[1].push(secondArr);
//   return answer;
// };

var findDifference = function (nums1, nums2) {
  const answer = [];
  const firstArr = nums1
    .filter((elem) => !nums2.includes(elem))
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
  const secondArr = nums2
    .filter((elem) => !nums1.includes(elem))
    .filter((elem, index, arr) => arr.indexOf(elem) === index);
  answer.push(firstArr);
  answer.push(secondArr);
  return answer;
};

console.log(findDifference(arr1, arr2));
