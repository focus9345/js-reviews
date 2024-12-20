/**
 * @description Jest test for reverseString function
 * @author Joshua Connor
 * @version 0.0.1
 * @requires array.ts
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import { reverseString, kRadiusSubarrayAverage, maxAverageSubArray, maxConsecutiveOnes, minStartValue, checkPalindrome, dayOfTheWeek, romanToInt, intToRoman, merge, majorityElement, maxProfit } from './array';

// test the reverseString function
describe('reverseString module', () => {
    test('reverses the string "hello" to equal "olleh"', () => {
        let s = ["h", "e", "l", "l", "o"];
        reverseString(s);
        expect(s).toEqual(["o", "l", "l", "e", "h"]);
    });
});

// test the kRadiusSubarrayAverage function
describe('kRadiusSubarrayAverage module', () => {
    test('returns the maximum average of a subarray of length k', () => {
        let nums = [1, 12, -5, -6, 50, 3];
        let k = 4;
        expect(kRadiusSubarrayAverage(nums, k)).toBe(12.75);
    });
});

// test the maxAverageSubArray function
describe('maxAverageSubArray module', () => {
    test('returns the maximum average of a subarray of length k', () => {
        let nums = [1, 12, -5, -6, 50, 3, -30, 25];
        let k = 4;
        expect(maxAverageSubArray(nums, k)).toBe(12.75);
    });
});

// test the maxConsecutiveOnes function
describe('maxConsecutiveOnes module', () => {
    test('returns the maximum number of consecutive ones after flipping k zeros', () => {
        let nums = [1,1,1,0,0,0,1,1,1,1,0];
        let k = 2;
        expect(maxConsecutiveOnes(nums, k)).toBe(6);
    });
});

// test the minStartValue function
describe('minStartValue module', () => {
    test('returns the minimum start value to reach the target', () => {
        let nums = [-3, 2, -3, 4, 2];
        expect(minStartValue(nums)).toBe(5);
    });
});

// test the checkPalindrome function
describe('checkPalindrome module', () => {
    test('returns true if the string is a palindrome', () => {
        let s = "racecar";
        expect(checkPalindrome(s)).toBe(true);
    });
});

// test the dayOfTheWeek function
describe('dayOfTheWeek module', () => {
    it('returns day of the week in that month of that year, case 1, returns Saturday', () => {
        let day = 31;
        let month = 8;
        let year = 2019;
        expect(dayOfTheWeek(day, month, year)).toEqual("Saturday");
    });
    it('returns day of the week in that month of that year, case 2, returns Sunday', () => {
        let day = 18;
        let month = 7;
        let year = 1999;
        expect(dayOfTheWeek(day, month, year)).toEqual("Sunday");
    });
});

// test the romanToInt function
describe('romanToInt module', () => { 
    test('returns the number converted from roman numeral', () => {
        let s = "LVIII";
        expect(romanToInt(s)).toBe(58);
    });
});

// test the intToRoman function
describe('intToRoman module', () => {
    test('returns the roman numeral converted from the number', () => {
        let num = 58;
        expect(intToRoman(num)).toBe("LVIII");
    });
});

// test the merge function
describe('merge module', () => {
    test('returns the merged array', () => {
        let nums1 = [1,2,3,0,0,0];
        let m = 3;
        let nums2 = [2,5,6];
        let n = 3;
        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1,2,2,3,5,6]);
    });
});

// test the majorityElement function
describe('majorityElement module', () => {
    test('returns the majority element in the array', () => {
        let nums = [3,2,3];
        expect(majorityElement(nums)).toBe(3);
    });
});

// test the maxProfit function
describe('maxProfit module', () => {
    test('returns the maximum profit from the stock prices', () => {
        let prices = [7,1,5,3,6,4];
        expect(maxProfit(prices)).toBe(7);
    });
});