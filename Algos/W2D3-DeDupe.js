
//Remove duplicate characters(case-sensitive) including
//punctuation. Keep only the last instance of each character
//"Snaps! crackles! pops!" -> "Snrackle ops!"
//scoop dedupe!

const dedupe = (str) => {
    let newStr = "";
    for(let i = str.length-1; i >= 0; i--) {
        if(charNotInStr(newStr, str[i])) newStr = str[i] + newStr;
    }
    return newStr;
}

const charNotInStr = (str, char) => {
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char) return false;
    }
    return true;
}


console.log("\n1:", dedupe("Snaps! crackles! pops!")+"\n");
console.log("2:", dedupe("Did I shine my shoes today?")+"\n");
console.log("3:", dedupe("scoop dedupe!")+"\n");
console.log("4:", dedupe("This is freaking insane because I live in Cincinnati but I want to live in Mississippi with my family!")+"\n");
console.log("5:", dedupe("Sweet potato"));
