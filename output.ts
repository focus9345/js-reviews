/**
 * @name Output Practice Functions
 * @description function to output the practice functions
 * @author Joshua Connor
 * @version 0.0.1
 * @type {function}
 * 
 */

import { reverseString } from './data-structures/array';

function logToConsole(fn: Function, fnname: string, input: any): void {
    console.log('##############################################');
    console.group('Output Function');
    console.log(fnname);
    console.log('Input: ' + input);
    fn(input);
    console.info('Info: ' + input);
    console.dir('Dir: ' + input);
    console.debug('Debug: ' + input);
    console.table('Table: ' + input);
    console.trace('Trace: ' + input);
    console.groupEnd();
}

// Main run functions
console.clear();
console.group('Data Structures');
console.group('Array Functions');
logToConsole(reverseString, 'reverseString', ["h", "e", "l", "l", "o"]);
console.groupEnd();
console.groupEnd();
console.group('Design Patterns');
console.groupEnd();