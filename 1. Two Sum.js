/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for (let i in nums) {
        let diff = target - nums[i];
        if (obj[diff]) {
            return [obj[diff], i];
        } else {
            obj[nums[i]] = i;
        }
    }
};
