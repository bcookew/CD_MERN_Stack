//create a function that accepts a string representing an int
//in binary notation, and returns the int
//you do not need to use parseInt
//should return integer >= 0

//given "1010101", return 85
//given "100011", return 35

const binToDec = (str) => {
    let revStr = str.split("").reverse().join("");
    let output = 0;
    for (let i = 0; i < revStr.length; i++) {
        output += revStr[i] * (2 ** i);
    }
    return output;
}
// ====================== John Cunninghams Solve

const binToDecJC = (str) => {
    let output = 0;
    for (let i = 0; i < str.length; i++) {
        output += str[str.length-1-i] * (2 ** i);
    }
    return output;
}

console.log(binToDec("1010101"));
console.log(binToDec("100011"));
console.log(binToDec("100"));
console.log(binToDec("1000"));
console.log(binToDec("1111"));
console.log(binToDec("110101011"));
console.log(binToDec("1111111111"));

//if you have the time, do the opposite! Take in a decimal number and return a
//string with the binary data
const decToBinBuiltIn = (num) => num.toString(2);


// ====================== Eirikur Crocket Solution!!!

const decToBinEC = (num) => {
    let bin = ""
    while(num > 0){
        // console.log(bin)
        bin = (num%2) + bin
        num -= (num%2)
        num = (num/2);
        // console.log(num)
    }
    // console.log(bin)
    return bin;
}

// ====================== John and William's Solve

const decToBinJCWN = (num) => {
    let result = "";
    while ( num > 0) {
        // console.log(num);
        result = (num % 2) + result;
        num = Math.floor(num / 2);
        // console.log(num);
    }
    return(result);
}


console.log(decToBinEC(85));
console.log(decToBinEC(420));
console.log(decToBinEC(11));
console.log(decToBinEC(181));