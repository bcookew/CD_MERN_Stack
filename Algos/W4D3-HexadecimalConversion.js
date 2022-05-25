//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    const hex = {
        A:10, B:11, C:12,
        D:13, E:14, F:15
    }
    let output = 0;
    for (let i = 0; i < str.length; i++) {
        const hexChar = str[str.length-1-i];
        if(hex[hexChar]) {
            output += hex[hexChar] * (16 ** i);
        }
        else {
            output += hexChar * (16 ** i);
        }
    }
    return output;
}

console.log(hexStrToDec("1D2"));
console.log(hexStrToDec("2C1"));
console.log(hexStrToDec("3B5"));
console.log(hexStrToDec("FFF"));
console.log(hexStrToDec("6C"));
console.log(hexStrToDec("1A4"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (num) => {
    const hex = {
        10:"A", 11:"B", 12:"C",
        13:"D", 14:"E", 15:"F"
    }
    let output = ""
    while(num > 0){
        const remainder = num % 16;
        num -= remainder;
        num = num / 16;
        if(hex[remainder]) {
            output = hex[remainder] + output
        } else output = remainder + output;
    }
    // console.log(output)
    return output;
}

console.log(decToHexStr(108));
console.log(decToHexStr(420));