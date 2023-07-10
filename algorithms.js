// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let arr = nums.sort((a, b) => a - b); // Create a copy of the array and sort it

  for (let i = 0; i <= nums.length - 1; i += 2) { // Iterate by 2
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];  // Return the first non-matching pair
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// To find the maximum depth of the tree we can apply a simple recursive approach...
// Where each function call will represent a subtree which has root node called as ‘root’...
// We traverse the binary tree by a recursive function starting from the root node...
var maxDepth = function(root) {
  // Base case...
  // If the subtree is empty i.e. root is NULL, return depth as 0...
  if(root == null)  return 0;
  // if root is not NULL, call the same function recursively for its left child and right child...
  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  // When the two child function return its depth...
  // Pick the maximum out of these two subtrees and return this value after adding 1 to it...
  return Math.max(leftDepth, rightDepth) + 1;    // Adding 1 is the current node which is the parent of the two subtrees...
};


