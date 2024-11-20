/**
 * @description Jest test for reverseString function
 * @author Joshua Connor
 * @version 0.0.1
 * @requires array.ts
 * @jest-environment jsdom
 */

import {describe, expect, test} from '@jest/globals';
import reverseString from './array';

describe('reverseString module', () => {
    test('reverses the string "hello" to equal "olleh"', () => {
        let s = ["h", "e", "l", "l", "o"];
        reverseString(s);
        expect(s).toEqual(["o", "l", "l", "e", "h"]);
    });
});
