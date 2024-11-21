/**
 * @name arrays
 * @description array practicing problems
 * @author Joshua Connor
 * @version 0.0.2
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
// function k radius subarray average
// leetcode problem 643
// https://leetcode.com/problems/maximum-average-subarray-i/
const kRadiusSubarrayAverage = (nums: number[], k: number): number => {
    let max = -Infinity; // set max to negative infinity
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]; // add the sum of the first k elements
    }
    max = sum;
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        max = Math.max(max, sum);
    }
    return max / k;
}
// export the function
export { reverseString, kRadiusSubarrayAverage };