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
    // console.log(array);
    return j;
}
function randPivot (min,max) {
    return Math.floor(Math.random() * (max-min)+min);
} 

function quicksort(array, i = 0, j = array.length - 1) {
    console.log(array);
    if(i >= j) {
        return;
    }
    let pivot = partition(array, array[randPivot(i,j)]);
    console.log("Pivot:",pivot);
    if(i < pivot - 1) {
        quicksort(array, i, pivot - 1);
    }
    if(pivot < j) {
        quicksort(array, pivot + 1, j);
    }
}
// console.log(arr[randPivot(arr)]);
console.log(quicksort(arr));

// console.log(partition(arr, arr[randPivot(arr)]));
// console.log(partition(arr, 8));