//partition the array around the value at arr[0]
//without creating a new array
//values left of the original pivot should be less than the pivot
//values right of the pivot should be >= the pivot value
//note: each side of the partitioned value does not
//have to be sorted.
//return the partitioned array
//bonus: return the index where the value at 0 ends up
//[5,4,9,2,5,3] -> [4,2,3,5,9,5], return 3
const partition = (arr) => {
    pivot = arr[0];
    let pIdx = 0;
    for( let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            let mover = i;
            while(mover > pIdx) {
                const temp = arr[mover-1];
                arr[mover-1] = arr[mover];
                arr[mover] = temp;
                mover--;
            }
            pIdx++;
        }
    }
    // console.log(arr);
    return pIdx;
}

const quickSort = (arr) => {
    if(arr.length < 2) return arr; // returns if the arr length is less than 2
    else{
        console.log("\nPre-Partition", arr); // Logs arr state pre partition
        
        let pivot = partition(arr); // Calls Partition on arr
        
        console.log("Post-Partition", arr); // Logs arr state post partition
        
        let left = arr.slice(0, pivot); // create new array up to pivot exclusive
        let right = arr.slice(pivot+1, arr.length); // creates new array from after pivot to end
        let middle=[arr[pivot]] // creates new array with only the pivot value
        
        console.log("Left:", left); // Logs left side pre-recursive call
        console.log("Right:", right); // Logs Right side pre-recursive call
        
        left = quickSort(left); // Recursive call on only left
        right = quickSort(right); // Recursive call on only right
        
        arr = left.concat(middle.concat(right)) // Concat right onto pivot and pivot+right onto left
    }
    return arr; // returns concatenated arr
}

// console.log(quickSort([5,4,9,2,5,3]));
//should return [4,2,3,5,9,5]
console.log("\n\n#1");
console.log(quickSort([7, 45, 2, 67, 3, 2, 1, 6, 4, 5, 2, 8, 14, 1, 3, 82, 90, -1, 0]));
//should return [4,7]
console.log("\n\n#2");
console.log(quickSort([7,4]));
//should return [2,1,3,4,5]
console.log("\n\n#3");
console.log(quickSort([3,5,1,2,4]));

console.log("\n\n#4");
console.log(quickSort([7,2,10,15,1]));

function partitionFunc (array, pivot) {
    let i = 0;
    let j = array.length-1;
    while(i != j) {
        if (array[i] < pivot) i++;
        if (array[j] > pivot) j--;
        if (array[i] >= pivot && array[j] <= pivot) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    // console.log(array);
    return j;
}