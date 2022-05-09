//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common
//This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

const intersect = (arrLeft, arrRight) => {
    let tracker = {};
    for(let i = 0; i < arrLeft.length; i++){
        if(tracker[arrLeft[i]]){
            tracker[arrLeft[i]].left++;
        } else {
            tracker[arrLeft[i]] = {left: 1, right: 0}
        }
    }
    for(let i = 0; i < arrRight.length; i++){
        if(tracker[arrRight[i]]){
            tracker[arrRight[i]].right++;
        }
    }
    console.log(tracker);
    // All original inputs have been iterated through
    
    let newArr = []; // Create new empty array
    for (const key in tracker) {
        let tempObj = tracker[key]; // create temp obj for readability
        
        // ensure we only work with objects where the key existed in both arrays
        if(tempObj.right > 0){ 
            
            // Check which initial array had the lesser quantity 
            // then push the value that number of times
            if(tempObj.left <= tempObj.right){
                for(let i = 0; i < tempObj.left; i++){
                    newArr.push(key);
                }
            } else {
                for(let i = 0; i < tempObj.right; i++){
                    newArr.push(key);
                }
            }
        }
    }
    return newArr.length > 0 ? newArr : "No Instersecting Values";
}
console.log("\n\n#1");
console.log(intersect([2,2,4,7,9,10],[2,2,3,5,7,9,10]));
console.log("\n\n#2");
console.log(intersect([1,1,4,5,8],[1,1,1,5,6,8]));
console.log("\n\n#3");
console.log(intersect([1,3,5,7,9],[2,4,6,8,10]));
console.log("\n\n#4");
console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
console.log("\n\n#5");
console.log(intersect([-9,-5,-5,3,4,4,4,4,4,4,5,7],[-5,0,1,1,1,1,1,2,4,4,6,7]));
