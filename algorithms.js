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

var reverseList = function(head) {
  let current = head;
  let prev = null;
  while(current) {
      let future = current.next;
      current.next = prev;
      prev = current;
      current = future;
  }
  return prev;
};

/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  let sum = 0;
  let index = 1;
  for(let i = columnTitle.length - 1; i >= 0; i--) {
      sum += index * (columnTitle[i].charCodeAt() - 64)
      index*= 26;
  }
  return sum
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const n = nums.length;
  const majority = Math.floor(n / 2);
  let buckets = {};

  // quick checks
  if (n <= 2) { return nums[0]; }

  for (let i = 0; i < n; i++) {
    buckets[nums[i]] = buckets[nums[i]] || 0;
    buckets[nums[i]]++;
    if (buckets[nums[i]] > majority) {
      return nums[i];
    }
  }
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  for(let i = 0; i< nums.length; i++) {
      const num = nums[i];
      const subNums = nums.slice(i+1);
      if(subNums.indexOf(num) !== -1) {
          return true;
      }
  }
  return false;
};

var containsDuplicate = function(nums) {
  const s = new Set(nums); return s.size !== nums.length
};

var firstUniqChar = function(str){
  var freq = Array(26).fill(0);
  for(var s of str){
      const idx = s.charCodeAt()-97;
      freq[idx]+=1;
  }
  for(var i=0; i<str.length; i++){
      const idx = str[i].charCodeAt()-97;
      if(freq[idx] === 1) return i;
  }
  return -1;
}

// convert sorted array to binary search tree
var sortedArrayToBST = function(nums) {
  function create(left, right) {
      if (left > right) {
          return null;
      }
      
      const i = Math.floor((right - left) / 2) + left;
      
      const node = new TreeNode(nums[i]);
      
      node.left = create(left, i - 1);
      node.right = create(i + 1, right);
      
      return node;
  }
  
  return create(0, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function (nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    actualSum = actualSum + nums[i]
  }
  
  return expectedSum-actualSum;
};

// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result 
// must appear as many times as it shows in both arrays and you may return the result in any order.
var intersect = function(nums1, nums2) {
  const map = new Map();
  for (const n of nums1) {
      if (map.has(n)) {
          map.set(n, map.get(n) + 1);
      } else {
          map.set(n, 1);
      }
  }
  const result = [];
  for (const n of nums2) {
      if (map.has(n) && map.get(n) > 0) {
          result.push(n);
          map.set(n, map.get(n) - 1);
      }
  }
  return result;
};

// Best Time to Buy and Sell Stock
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
      const currentPrice = prices[i];
      const currentProfit = currentPrice - minPrice;
      if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
      }
      if (currentPrice < minPrice) {
          minPrice = currentPrice;
      }
  }
  return maxProfit;
};

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  let nString = n.toString()

  return validate(nString, new Set())
};

function validate(nString, prevNums){

  if ( nString === '1' ) return true

  if ( prevNums.has(nString) ) return false

  prevNums.add(nString)

  let newN = 0

  for ( let num of nString.split("") ){

      newN += num ** 2
  }
  return validate(newN.toString(), prevNums)
}

// Given an integer numRows, return the first numRows of Pascal's triangle.
var generate = function(numRows) {
  let triangle=[[1]]
  for (let i = 1; i < numRows; i++){
      const newArr =[1]
      for (let j = 1; j < i; j++){
          newArr.push(triangle[i-1][j] + triangle[i-1][j-1])
      }
      newArr.push(1)
      triangle.push(newArr)
  }
  return triangle;
};







