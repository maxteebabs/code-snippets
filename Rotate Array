Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for(let i = 1; i <= k; i++){
//         nums.unshift(nums.pop());
//     }
//     return nums;
// };

var rotate = function(nums, k) {
    var n = nums.length;
    k = k % n;
    if (k === 0 || n === 0 || n === k) {
        return;
    }
    
    var count = 0;
    var start = 0;
    var current = start;
    var prev = nums[start];
    
    while (count < n) {
        current = (current + k) % n;
        var temp = nums[current];
        nums[current] = prev;
        prev = temp;
        count++;
        
        if (current === start) {
            start++;
            current = start;
            prev = nums[start];
        }
    }
};

