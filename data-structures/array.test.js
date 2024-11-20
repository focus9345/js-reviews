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
(0, globals_1.describe)('reverseString module', () => {
    (0, globals_1.test)('reverses the string "hello" to equal "olleh"', () => {
        let s = ["h", "e", "l", "l", "o"];
        (0, array_1.reverseString)(s);
        (0, globals_1.expect)(s).toEqual(["o", "l", "l", "e", "h"]);
    });
});
