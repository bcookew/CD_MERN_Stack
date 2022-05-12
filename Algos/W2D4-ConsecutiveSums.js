/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/
const findConsecutiveSums = (nums, targetSum) => {
    let output = []; // Instantiate array to eventually return
    for (let i = 0; i < nums.length; i++) { // loop through inoput array
        let tempArr = []; // temp arr for holding nums that sum to target
        let tempSum = 0; // counter for tracking sum of nums in tempArr
        for (let j = i; j < nums.length; j++) { // loop through subsequent nums to add
            if (nums[j] > targetSum) break; //if the num at j is > than target break the loop
            tempSum += nums[j]; // add num at j to sum
            tempArr.push(nums[j]); // push num at j into temp arr
            if(tempSum === targetSum) output.push([...tempArr]); // if the tempSum === to target push a copy into output preserving tempArr
            else if (tempSum > targetSum) break; // break out of loop if tempSum got bigger than target
        }
    }
    return output; // return 
}
console.log("\n\nExample - 1");
const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
console.log(findConsecutiveSums(nums1,sum1));
// const expected1 = [
    //   [2, 5, 3, 6],
    //   [3, 6, 7],
    // ];
    
console.log("\n\nExample - 2");
const nums2 = [];
const sum2 = 5;
console.log(findConsecutiveSums(nums2,sum2));
// // const expected2 = [];

console.log("\n\nExample - 3");
const nums3 = [10, 15, 20, 35, 30];
const sum3 = 5;
console.log(findConsecutiveSums(nums3,sum3));
// // const expected3 = [];

console.log("\n\nExample - 4");
// // Bonus:
const nums4 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum4 = 16;
console.log(findConsecutiveSums(nums4,sum4));
// const expected4 = [
//   [2, 5, 3, 6],
//   [3, 6, 7],
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ];