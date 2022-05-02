function swap(arr, idxA, idxB) {
    let temp = arr[idxA];
    arr[idxA] = arr[idxB];
    arr[idxB] = temp;
    return arr;
}

function bubbleSort(arr) {
    let isSorted = false;
    while(!isSorted){
        isSorted = true;
        for (let i = 0; i < arr.length-1; i++) {
            if(arr[i] > arr[i + 1]){
                isSorted = false;
                arr = swap(arr, i, i+1);
            }
        }
    }
    return arr;
}

let arr = [5,4,2,6,8,14,1,3,20,-5,24]
// console.log(arr);
// console.log(bubbleSort(arr));

function selectionSort(arr) {
    for(var start = 0; start < arr.length - 1; start++) {
        var minIdx = start;
        for(var i = start + 1; i < arr.length; i++) {
            if(arr[i] < arr[minIdx]){
                minIdx = i;
            }
        }
        arr = swap(arr, start, minIdx)
    }
    return arr;
    // Mike Mazur's Version
    // for(var start = 0; start < arr.length - 1; start++){
    //     var mindex = start;
    //     for(var i = start + 1; i < arr.length; i++){
    //         if(arr[i] < arr[mindex]){
    //             mindex = i;
    //         }
    //     }
    //     var temp = arr[start];
    //     arr[start] = arr[mindex];
    //     arr[mindex] = temp;
    // }
    // return arr;
}

let arr2 = [5,4,2,6,8,14,1,3]
console.log(selectionSort(arr2));