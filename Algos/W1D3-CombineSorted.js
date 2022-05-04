// combine two pre-sorted arrays into one sorted array
// return the newly combined array
// bonus challenge: combine in place into LeftArr instead of a new array
const combine = (leftArr, rightArr) => {
    let newArr = [];
    while(leftArr.length > 0 && rightArr.length > 0) {
        if(leftArr[0] < rightArr[0]) {
            newArr.push(leftArr.shift());
        }
        else if(rightArr[0] < leftArr[0]) {
            newArr.push(rightArr.shift());
        }
        console.log(newArr);
    }
    while (leftArr.length === 0 && rightArr.length > 0) {
        newArr.push(rightArr.shift())
    }
    while (rightArr.length === 0 && leftArr.length > 0) {
        newArr.push(leftArr.shift())
    }
    return newArr;
}
let arr1 = [1, 2, 7, 9]
let arr2 = [0, 3, 4, 6, 11, 12]
// should return [0,1,2,3,4,6,7,9,11]
console.log(combine(arr1, arr2));
console.log(arr1);
// should return [0,1]
console.log(combine([1], [0]));