/**
 * @description Jest test for reverseString function
 * @author Joshua Connor
 * @version 0.0.1
 * @requires array.ts
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import { reverseString, kRadiusSubarrayAverage } from './array';

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
