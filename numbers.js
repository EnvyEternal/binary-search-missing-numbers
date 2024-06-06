const findMissingNumbers = (nums) => {
  const findMissing = (arr, start, end, offset) => {
    while (start < end) {
      const mid = Math.floor((end - start) / 2) + start;
      if (arr[mid] === mid + offset) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    return start + offset;
  };

  const firstMissing = findMissing(nums, 0, nums.length - 1, 1);
  const secondMissing = findMissing(nums, firstMissing - 1, nums.length, 2);

  return [firstMissing, secondMissing];
};

const nums = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(findMissingNumbers(nums));

// The first call to findMissing has O(log n) complexity, where n is the length of the input array.
// The second call to findMissing has O(log n) complexity as well.
// Since both calls are executed sequentially, the total computational complexity of the solution will be: O(log n) + O(log n) = 2 * O(log n).
// In asymptotic analysis, the constants are omitted, so the resulting complexity is: O(log n).
