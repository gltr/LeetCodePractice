// From: https://leetcode.com/problems/single-number/

// Given an array of integers, every element appears twice except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


// I: an array of integers
// O: a single integer
// C: linear time complexity
// E: TBD...



/**
 * @param {number[]} nums
 * @return {number}
 */


var singleNumber = function(nums) {
  //create a storage object
    var storage = {};
  //loop through num array
  for (var i = 0; i < nums.length; i++) {
    //if the element at a given index is not already in the storage object
    if (storage[nums[i]] === undefined) {
      //assign it to the storage object (as key, value is a count)
      storage[nums[i]] = 1;
    //else if it is already in the storage object
    } else {
      storage[nums[i]]++;
      //increment that object's count
    } 
  }

  //for-in loop through the object
  for (var prop in storage) {
    //if the value of any of the keys is strictly equal to 1
    if(storage[prop] === 1) {
      //return that thing
      return +prop;      
    }
  }
};