"use strict";
/**
 * @description Jest test for reverseString function
 * @author Joshua Connor
 * @version 0.0.1
 * @requires array.ts
 * @jest-environment jsdom
 */
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const array_1 = require("./array");
// test the reverseString function
(0, globals_1.describe)('reverseString module', () => {
    (0, globals_1.test)('reverses the string "hello" to equal "olleh"', () => {
        let s = ["h", "e", "l", "l", "o"];
        (0, array_1.reverseString)(s);
        (0, globals_1.expect)(s).toEqual(["o", "l", "l", "e", "h"]);
    });
});
// test the kRadiusSubarrayAverage function
(0, globals_1.describe)('kRadiusSubarrayAverage module', () => {
    (0, globals_1.test)('returns the maximum average of a subarray of length k', () => {
        let nums = [1, 12, -5, -6, 50, 3];
        let k = 4;
        (0, globals_1.expect)((0, array_1.kRadiusSubarrayAverage)(nums, k)).toBe(12.75);
    });
});
// test the maxAverageSubArray function
(0, globals_1.describe)('maxAverageSubArray module', () => {
    (0, globals_1.test)('returns the maximum average of a subarray of length k', () => {
        let nums = [1, 12, -5, -6, 50, 3, -30, 25];
        let k = 4;
        (0, globals_1.expect)((0, array_1.maxAverageSubArray)(nums, k)).toBe(12.75);
    });
});
// test the maxConsecutiveOnes function
(0, globals_1.describe)('maxConsecutiveOnes module', () => {
    (0, globals_1.test)('returns the maximum number of consecutive ones after flipping k zeros', () => {
        let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
        let k = 2;
        (0, globals_1.expect)((0, array_1.maxConsecutiveOnes)(nums, k)).toBe(6);
    });
});
// test the minStartValue function
(0, globals_1.describe)('minStartValue module', () => {
    (0, globals_1.test)('returns the minimum start value to reach the target', () => {
        let nums = [-3, 2, -3, 4, 2];
        (0, globals_1.expect)((0, array_1.minStartValue)(nums)).toBe(5);
    });
});
// test the checkPalindrome function
(0, globals_1.describe)('checkPalindrome module', () => {
    (0, globals_1.test)('returns true if the string is a palindrome', () => {
        let s = "racecar";
        (0, globals_1.expect)((0, array_1.checkPalindrome)(s)).toBe(true);
    });
});
// test the dayOfTheWeek function
(0, globals_1.describe)('dayOfTheWeek module', () => {
    it('returns day of the week in that month of that year, case 1, returns Saturday', () => {
        let day = 31;
        let month = 8;
        let year = 2019;
        (0, globals_1.expect)((0, array_1.dayOfTheWeek)(day, month, year)).toEqual("Saturday");
    });
    it('returns day of the week in that month of that year, case 2, returns Sunday', () => {
        let day = 18;
        let month = 7;
        let year = 1999;
        (0, globals_1.expect)((0, array_1.dayOfTheWeek)(day, month, year)).toEqual("Sunday");
    });
});
// test the romanToInt function
(0, globals_1.describe)('romanToInt module', () => {
    (0, globals_1.test)('returns the number converted from roman numeral', () => {
        let s = "LVIII";
        (0, globals_1.expect)((0, array_1.romanToInt)(s)).toBe(58);
    });
});
// test the intToRoman function
(0, globals_1.describe)('intToRoman module', () => {
    (0, globals_1.test)('returns the roman numeral converted from the number', () => {
        let num = 58;
        (0, globals_1.expect)((0, array_1.intToRoman)(num)).toBe("LVIII");
    });
});
