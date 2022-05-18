//given a string of words(with spaces),
//return an array of words
//spaces are considered the separation between words
//no built in functions!!!
//"Did I shine my shoes today?" ->
//returns ["Did","I","shine","my","shoes","today?"]
//"two             words" -> ["two","words"]
const stringToWordArray = (str) => {
    let output = [];
    let outputIdx = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            if(output[outputIdx]) outputIdx++;
        }
        else output[outputIdx] ? output[outputIdx] += str[i] : output[outputIdx] = str[i];
    }
    return output;
}

console.log(stringToWordArray("Did I shine my shoes today?"));
console.log(stringToWordArray("Did I shine my shoes today?      "));
console.log(stringToWordArray("two             words"));

//write a function that, given a string of words(with spaces),
//returns a new string with words in reverse sequence.
//"This is a test" -> "test a is This"
const reverseWordOrder = (str) => {
    let tempArr = stringToWordArray(str);
    let output = "";
    for(var i = tempArr.length-1; i >= 0; i--){
        output += tempArr[i] + " ";
    }
    return output;
}

console.log(reverseWordOrder("This is a test"));
console.log(reverseWordOrder("A man a plan a canal Panama"));