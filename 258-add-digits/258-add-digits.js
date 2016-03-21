// From: https://leetcode.com/problems/add-digits/

// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// For example:
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?


// I:  a multi-digit number
// O:  a single number
// C:  none, but try to eventually get a constant time solution
// E:



/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function(num) {
  //create variable that converts num to string
  var numStr = '' + num;
  //base case: if the length of the string is 1
  if (numStr.length === 1) {
    //convert the string back into a number and return it
    return +numStr;
  } else {
  //recursive case: loop through the string
  var sum = 0;
  for (var i = 0; i < numStr.length; i++) {
    //add each item of the string together and convert it back into a number
    sum += (parseInt(numStr[i]));
    //run addDigits on the new number
    }
  addDigits(sum);
  }
};