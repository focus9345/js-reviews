"use strict";
/**
 * @author Joshua Connor
 * @version 0.0.1
 * @requires array.ts
 * @jest-environment jsdom
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const array_1 = __importDefault(require("./array"));
(0, globals_1.describe)('reverseString module', () => {
    (0, globals_1.test)('reverses the string "hello" to equal "olleh"', () => {
        let s = ["h", "e", "l", "l", "o"];
        (0, array_1.default)(s);
        (0, globals_1.expect)(s).toEqual(["o", "l", "l", "e", "h"]);
    });
});
