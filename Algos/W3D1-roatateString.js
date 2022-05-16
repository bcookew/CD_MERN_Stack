//Create a standalone function that accepts a string
//and an integer, and rotates the characters in the
//string to the right by that amount.
//this one must be done without built in methods
//("Did I shine my shoes today?", 9) ->
//"es today?Did I shine my sho"
const rotateString = (str, num) => {
    let shiftBy = num % str.length
    let newStr ="";
    let breakPoint = str.length - shiftBy;
    for (let i = breakPoint; i < str.length; i++) {
        newStr += str[i];
    }
    for (let j = 0; j < breakPoint; j++) {
        newStr += str[j];
    }
    return newStr
}

// let testString = "012345";
// console.log(rotateString(testString, 3));
let shoes = "Did I shine my shoes today?";
console.log(rotateString(shoes, 9));

//write a function that will return true if str2 is a
//rotation of str1. otherwise return false
//("Did I shine my shoes today?", "es today?Did I shine my shoe")
// -> returns true
const isRotation = (str1, str2) => {
    // Break out earlier with a length check
    if (str1.length != str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if(str1 == rotateString(str2, i+1)) return true;
    }
    return false;
}
const isRotationInstrucorVersion = (str1, str2) => {
    if(str1.length != str2.length) return false;

    let combine = str2 + str2;
    let i1 = 0;

    for(let i2 = 0; i2 < combine.length; ++i2){
        if(i1 == str1.length) return true;
        if(str1[i1] == combine[i2])
            ++i1;
        else{
            i1 = 0;
            if(str1[i1] == combine[i2])
                ++i1;
        }
    }
    return i1 == str1.length;
}

console.log(isRotation("Did I shine my shoes today?", "es today?Did I shine my sho"));
console.log(isRotation("Did I shine my shoes today? ", "es today?Did I shine my sho"));