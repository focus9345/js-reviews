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
    console.log('##############################################');
    console.group('Ouputing Function');
    console.log(fnname);
    fn(input);
    console.info(input);
    console.dir(input);
    console.debug(input);
    console.trace(input);
    console.groupEnd();
}
console.clear();
console.group('Data Structures');
console.group('Ouputing Array Functions');
logToConsole(array_1.reverseString, 'reverseString', ["h", "e", "l", "l", "o"]);
console.groupEnd();
console.groupEnd();
console.group('Design Patterns');
console.groupEnd();
