//You are given a string that may contain sequences of consecutive characters.
//Create a function to shorten a string by including the character, then the 
//number of times it appears. For "aaaabbcddd" return "a4b2c1d3"
//no built in functions!!!! parseInt() is ok

const encode = str => {
    let encoded = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let charCount = 1;
        for (let j = i+1; j < str.length; j++) {
            if (str[j] === char) charCount++;
            else break;
        }
        encoded += char + charCount;
        i += charCount-1;
    }
    return encoded;
}


// console.log(encode("aaabbcccc"));
// console.log(encode("ddddeeeeeffgggg"));
// console.log(encode("aaaaabbbbbbbc"));
// console.log(encode("bb"));

//given an encoded string, decode and return it
//given "a3b2c1d3" return "aaabbcddd"
//parseInt() is ok
//special note: can your function handle "g14f12"?

const decode = (str) => {
    console.log("Input: " + str + "\n");
    let chars = [];
    let nums = [];
    let output = "";
    arrIdx = 0;
    numIdx = 0;
    for (let i = 0; i < str.length; i++) {
        if(isNaN(parseInt(str[i]))) {
            chars[arrIdx] = str[i];
            arrIdx++
        }
        else if (!isNaN(parseInt(str[i-1]))) {
            nums[numIdx] += str[i];
            if(isNaN(parseInt(str[i+1]))) numIdx++;
        }
        else {
            nums[numIdx] = str[i];
            if(isNaN(parseInt(str[i+1]))) numIdx++;
        };
    }
    console.log("Chars array:", chars);
    console.log("Nums Array:", nums, "\n");

    for (let b = 0; b < chars.length; b++) {
        for (let y = 0; y < parseInt(nums[b]); y++) {
            output += chars[b];
        }
    }
    return "Output: " + output + "\n";
}

console.log(decode("a3b2c4"));
console.log(decode("t2h10j4"));
console.log(decode("g14f12"));

// console.log(parseInt("432"));
// console.log(parseInt2("432"));