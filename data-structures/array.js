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
exports.intToRoman = exports.romanToInt = exports.dayOfTheWeek = exports.checkPalindrome = exports.minStartValue = exports.maxConsecutiveOnes = exports.maxAverageSubArray = exports.kRadiusSubarrayAverage = exports.reverseString = void 0;
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
// function min start value
//  Leetcode problem 1413
//  https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
const minStartValue = (nums) => {
    let min = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, sum);
    }
    return 1 - min;
};
exports.minStartValue = minStartValue;
// function check palindrome
// Leetcode problem 125
// https://leetcode.com/problems/valid-palindrome/
const checkPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
exports.checkPalindrome = checkPalindrome;
// function answer queries Day of the week
// Leetcode problem 1185
// https://leetcode.com/problems/day-of-the-week/
const dayOfTheWeek = (day, month, year) => {
    const currentDate = new Date(year, month - 1, day);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[currentDate.getDay()];
};
exports.dayOfTheWeek = dayOfTheWeek;
// function changes roman numerals to an integer
// Leetcode problem 13
// https://leetcode.com/problems/roman-to-integer/
const romanToInt = (s) => {
    let result = 0;
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && (s[i + 1] === 'V')) {
            result += 4;
            i++;
        }
        else if (s[i] === 'I' && (s[i + 1] === 'X')) {
            result += 9;
            i++;
        }
        else if (s[i] === 'X' && (s[i + 1] === 'L')) {
            result += 40;
            i++;
        }
        else if (s[i] === 'X' && (s[i + 1] === 'C')) {
            result += 90;
            i++;
        }
        else if (s[i] === 'C' && (s[i + 1] === 'D')) {
            result += 400;
            i++;
        }
        else if (s[i] === 'C' && (s[i + 1] === 'M')) {
            result += 900;
            i++;
        }
        else {
            result += roman[s[i]];
        }
    }
    return result;
};
exports.romanToInt = romanToInt;
//function to make a roman numeral from an integer
// Leetcode problem 12
// https://leetcode.com/problems/integer-to-roman/
const intToRoman = (num) => {
    let result = '';
    const roman = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M' };
    while (num > 0) {
        if (num >= 1000) {
            result += roman[1000];
            num -= 1000;
        }
        else if (num >= 900) {
            result += roman[900];
            num -= 900;
        }
        else if (num >= 500) {
            result += roman[500];
            num -= 500;
        }
        else if (num >= 400) {
            result += roman[400];
            num -= 400;
        }
        else if (num >= 100) {
            result += roman[100];
            num -= 100;
        }
        else if (num >= 90) {
            result += roman[90];
            num -= 90;
        }
        else if (num >= 50) {
            result += roman[50];
            num -= 50;
        }
        else if (num >= 40) {
            result += roman[40];
            num -= 40;
        }
        else if (num >= 10) {
            result += roman[10];
            num -= 10;
        }
        else if (num >= 9) {
            result += roman[9];
            num -= 9;
        }
        else if (num >= 5) {
            result += roman[5];
            num -= 5;
        }
        else if (num >= 4) {
            result += roman[4];
            num -= 4;
        }
        else {
            result += roman[1];
            num -= 1;
        }
    }
    return result;
};
exports.intToRoman = intToRoman;
