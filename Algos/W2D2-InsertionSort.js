//looping through the array from 0 to arr.length,
//shift a value in the array back to the place it belongs
//the value to shift should increment with each loop iteration
//follow this example for each step, with the current value in ()
//step one: [(6),4,5,2,8,14,1,3] -> [(6),4,5,2,8,14,1,3]
//step two: [6,(4),5,2,8,14,1,3] -> [(4),6,5,2,8,14,1,3]
//step three: [4,6,(5),2,8,14,1,3] -> [4,(5),6,2,8,14,1,3]
//step four: [4,5,6,(2),8,14,1,3] -> [(2),4,5,6,8,14,1,3]
//step five: [2,4,5,6,(8),14,1,3] -> [2,4,5,6,(8),14,1,3]
//and so on...
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

console.log(insertionSort([6,4,5,2,8,14,1,3]));
console.log(insertionSort([1,2,3,5,6,7,4]));