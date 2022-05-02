let arr = [4,8,5,7,1,6,10,2,3,9]
     //    i                  j
     //      i
function partition (array, pivot) {
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
    console.log(array);
    return j;
}
function randPivot (array) {
    return Math.floor(Math.random() * array.length);
} 

function quicksort(array, i = 0, j = array.length - 1) {
    // console.log(array);
    // console.log(array.length);
    if(array.length > 1) {
        console.log("Pre-Partition");
        let pivot = partition(array, array[randPivot(array)]);
        console.log("Post-Partition");
        if(i < pivot - 1) {
            console.log("i Recursive\ni     =", i,"\nPivot =",pivot);
            quicksort(array, i, pivot - 1);
        }
        if(pivot < j) {
            console.log("j Recursive");
            quicksort(array, pivot, j);
        }
    }
    return array;
}
// console.log(arr[randPivot(arr)]);
console.log(quicksort(arr));

// console.log(partition(arr, arr[randPivot(arr)]));
// console.log(partition(arr, 8));