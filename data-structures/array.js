"use strict";
/**
 * @name reverseString
 * @description function to reverse a string in place
 * @author Joshua Connor
 * @version 0.0.1
 * @param {string[]} s
 * @return {void} modify in-place
 * @type {function}
 * @exports reverseString
 */
Object.defineProperty(exports, "__esModule", { value: true });
// function to reverse a string in place
var reverseString = function (s) {
    var left = 0;
    var right = s.length - 1;
    // while left is less than right
    while (left < right) {
        var temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
// export the function
exports.default = reverseString;
// output the function
var s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
