
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const totalLength = nums.length;
    const numMap = {};
    for(let i = 0; i < totalLength; i++) {
        numMap[nums[i]] = i;
    }

    for(let i = 0; i < totalLength; i++) {
        const diff = target - nums[i];

        if(numMap[diff]) {
            return [ numMap[diff], i ];
        }
    }
    return [];
};
