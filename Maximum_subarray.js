Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const totalLength = nums.length;
    let max = -Infinity;
    let min = 0
    for(let i = 0; i < totalLength; i++) {
        min += nums[i];
        if(min > max) {
            max = min;
        }
        if(min < 0) {
            min = 0;
        }
        
    }
    return max;
};
