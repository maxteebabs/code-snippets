Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

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
