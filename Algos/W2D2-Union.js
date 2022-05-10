//Union Sorted Arrays
//Efficiently combine two pre-sorted arrays into a new sorted array
//no built in functions!!!

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
//Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
//Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]
const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let iter = i;
        while(arr[iter] < arr[iter-1]) {
            const temp = arr[iter-1];
            arr[iter-1] = arr[iter];
            arr[iter] = temp;
            iter--;
        }
    }
    return arr;
}

const union = (arrLeft, arrRight) => {
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
        } else {
            tracker[arrRight[i]] = {left: 0, right: 1}
        }
    }
    console.log(tracker);
    
    let newArr = [];
    for (const key in tracker) {
        let tempObj = tracker[key];
        if(tempObj.left >= tempObj.right){
            for(let i = 0; i < tempObj.left; i++){
                newArr.push(parseInt(key));
            }
        } else {
            for(let i = 0; i < tempObj.right; i++){
                newArr.push(parseInt(key));
            }
        }
    }
    newArr = insertionSort(newArr);
    return newArr.length > 0 ? newArr : "No Instersecting Values";
}

console.log(union([2,4,7,9,10],[2,3,5,7,9,10,-5]));
console.log(union([2,3,5,7,9,10],[2,4,7,9,10]));
console.log(union([1,2,2,2,7],[2,2,6,6,7]));
console.log(union([1,5,9],[2,6,10]));