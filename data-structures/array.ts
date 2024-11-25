/**
 * @name arrays
 * @description array practicing problems
 * @author Joshua Connor
 * @version 0.0.2
 * @type {function} 
 * @exports reverseString
 */

// function to reverse a string in place
// leetcode problem 344
// https://leetcode.com/problems/reverse-string/
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
// function max average subarray
// leetcode problem 643
// https://leetcode.com/problems/maximum-average-subarray-i/
const maxAverageSubArray = (nums: number[], k: number): number => {
    let sum = new Array(nums.length);
    let result = 0.5; // init the average
    sum[0] = nums[0]; // start the sums with the first index of nums
    for (let i = 1; i < nums.length; i++) {
        // create the sums array
        sum[i] = sum[i - 1] + nums[i];
    }
    result = sum[k - 1] * 1.0 / k; // find the starting average
    for (let i = k; i < nums.length; i++) {
        //compare and store the max average
        result = Math.max(result, (sum[i] - sum[i - k]) * 1.0 / k);
    }
    return result;
}
// function max consecutive ones
// Leetcode problem 1004
// https://leetcode.com/problems/max-consecutive-ones-iii/
const maxConsecutiveOnes = (nums: number[], k: number): number => {
    let left: number = 0, curr: number = 0, ans: number = 0;
    for (let right: number = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            curr++;
        }
        while (curr > k) {
            if (nums[left] == 0) {
                curr -= 1;
            }
            left++;
        }
        ans = Math.max( ans, right - left + 1);
    }
    return ans;
}
// function min start value
//  Leetcode problem 1413
//  https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
const minStartValue = (nums: number[]): number => {
    let min = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, sum);
    }
    return 1 - min;
}
// function check palindrome
// Leetcode problem 125
// https://leetcode.com/problems/valid-palindrome/
const checkPalindrome = (s: string): boolean => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
// function answer queries Day of the week
// Leetcode problem 1185
// https://leetcode.com/problems/day-of-the-week/
const dayOfTheWeek = (day: number, month: number, year: number): string => {
    const currentDate: Date = new Date(year, month - 1, day);
    const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[currentDate.getDay()];
}





// export all the functions
export { reverseString, kRadiusSubarrayAverage, maxAverageSubArray, maxConsecutiveOnes, minStartValue, checkPalindrome, dayOfTheWeek};