// 137. Single Number II
// Medium
// 6.5K
// 585
// Companies
// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: 
// Output: 3


// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

const nums = [2,2,3,2]
const singleNumber = function(nums) {
    const counts = new Array(32).fill(0); // Step 1
  
    for (const num of nums) { // Step 2
      for (let i = 0; i < 32; i++) {
        if (num & (1 << i)) {
          counts[i]++;
        }
      }
    }
  
    let result = 0;
    for (let i = 31; i >= 0; i--) { // Step 4
      result <<= 1;
      result |= counts[i] % 3;
    }
  
    return result; // Step 5
  };

 console.log(singleNumber(nums)); 