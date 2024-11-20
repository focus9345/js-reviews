"use strict";
/**
 * @name reverseString
 * @description function to reverse a string in place
 * @author Joshua Connor
 * @version 0.0.1
 * @param {string[]} s - the input array
 * @return {void} changes the input array in place
 * @type {function}
 * @exports reverseString
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
// function to reverse a string in place
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
