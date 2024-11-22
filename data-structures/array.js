"use strict";
/**
 * @name arrays
 * @description array practicing problems
 * @author Joshua Connor
 * @version 0.0.2
 * @type {function}
 * @exports reverseString
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxConsecutiveOnes = exports.maxAverageSubArray = exports.kRadiusSubarrayAverage = exports.reverseString = void 0;
// function to reverse a string in place
// leetcode problem 344
// https://leetcode.com/problems/reverse-string/
const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;
    // while left is less than right
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
exports.reverseString = reverseString;
// function k radius subarray average
// leetcode problem 643
// https://leetcode.com/problems/maximum-average-subarray-i/
const kRadiusSubarrayAverage = (nums, k) => {
    let max = -Infinity; // set max to negative infinity
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]; // add the sum of the first k elements
    }
    max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
};
exports.kRadiusSubarrayAverage = kRadiusSubarrayAverage;
// function max average subarray
// leetcode problem 643
// https://leetcode.com/problems/maximum-average-subarray-i/
const maxAverageSubArray = (nums, k) => {
    let sum = new Array(nums.length);
    let result = 0.5; // init the average
    sum[0] = nums[0]; // start the sums with the first index of nums
    for (let i = 1; i < nums.length; i++) {
        // create the sums array
        sum[i] = sum[i - 1] + nums[i];
    }
    result = sum[k - 1] * 1.0 / k; // find the starting average
    for (let i = k; i < nums.length; i++) {
        //compare and store the max average
        result = Math.max(result, (sum[i] - sum[i - k]) * 1.0 / k);
    }
    return result;
};
exports.maxAverageSubArray = maxAverageSubArray;
// function max consecutive ones
// Leetcode problem 1004
// https://leetcode.com/problems/max-consecutive-ones-iii/
const maxConsecutiveOnes = (nums, k) => {
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            curr++;
        }
        while (curr > k) {
            if (nums[left] == 0) {
                curr -= 1;
            }
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};
exports.maxConsecutiveOnes = maxConsecutiveOnes;
