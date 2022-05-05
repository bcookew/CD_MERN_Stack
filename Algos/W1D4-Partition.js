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
    console.log(arr);
    return pIdx;
}

//should return [4,2,3,5,9,5]
console.log(partition([5,4,9,2,5,3]));
//should return [4,7]
console.log(partition([7,4]));
//should return [2,1,3,4,5]
console.log(partition([3,5,1,2,4]));

// console.log(partition([7,2,10,15,1]));

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