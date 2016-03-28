// From: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
  // create count variable set to zero
  var count = 0;
  // inner recursive function
  var depthCount = function(root, count) {
    // base case: if the root is undefined or null, end the recursion
    if (root === undefined || root === null) {
      count += 0;
      return count;
    } else {
    // recursive case:
      // increment the count
      // run maxDepth on left and right
      return Math.max(depthCount(root.left, count + 1), depthCount(root.right, count + 1));
    }
  };
  depthCount(root, count);
};