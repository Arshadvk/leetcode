// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

const nums = [2,7,11,15]
const target = 9

const twoSum = (nums, target)=> {
    for(let i=0 ; i<nums.length-1 ; i++){
        for (let j = i+1; j < nums.length; j++) {
            if(target === nums[i]+nums[j]){
                return [i,j]
            }
            
        }
    }
};
console.log(twoSum(nums,target))