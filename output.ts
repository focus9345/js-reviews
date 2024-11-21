/**
 * @name Output Practice Functions
 * @description function to output the practice functions
 * @author Joshua Connor
 * @version 0.0.2
 * @type {function}
 * 
 */

import { reverseString, kRadiusSubarrayAverage } from './data-structures/array';


// Main run functions
console.clear();
console.group('Data Structures');
console.group('Array Functions');
console.info(reverseString(["h", "e", "l", "l", "o"]));
console.info(kRadiusSubarrayAverage([7, 4, 3, 9, 50, 3], 3));
console.groupEnd();
console.groupEnd();
console.group('Design Patterns');
console.groupEnd();