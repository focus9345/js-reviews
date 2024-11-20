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

// function to reverse a string in place
const reverseString = (s: string[]): void => {
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
}
// export the function
export { reverseString };