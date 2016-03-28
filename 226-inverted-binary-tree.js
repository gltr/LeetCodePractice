// From: https://leetcode.com/problems/invert-binary-tree/

// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// to

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  // Base Case: if root is undefined, stop recursion
  if (root === null) {
    return root;
  }
  // Recursive Case:
  // create a storage variable
  // set the storage variable equal to the right
  var temp = root.right;
  // set the right equal to the left and invoke invertTree
  root.right = invertTree(root.left);
  // set the left equal to the storage and invoke invertTree
  root.left = invertTree(temp);
  // return the root
  return root;
};