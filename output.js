"use strict";
/**
 * @name Output Practice Functions
 * @description function to output the practice functions
 * @author Joshua Connor
 * @version 0.0.1
 * @type {function}
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const array_1 = require("./data-structures/array");
function logToConsole(fn, fnname, input) {
    const inputType = typeof input;
    console.log('##############################################');
    console.group('Output Function');
    console.log(inputType + " : " + fnname);
    // the sarting place of the input
    console.log('Input: ' + input);
    // Call the function
    fn(input);
    // switch console log based on input type
    if (input !== null) {
        switch (inputType) {
            case 'undefined':
                console.debug(input);
                break;
            case 'object':
                console.table('Table: ' + input);
            case 'function':
            default:
                console.log('Output: ' + input);
        }
    }
    else {
        console.trace(input);
    }
    console.groupEnd();
}
// Main run functions
console.clear();
console.group('Data Structures');
console.group('Array Functions');
logToConsole(array_1.reverseString, 'reverseString', ["h", "e", "l", "l", "o"]);
console.groupEnd();
console.groupEnd();
console.group('Design Patterns');
console.groupEnd();
