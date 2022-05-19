const upperCaseIt = (str) => {
    let newStr = "";
    for(let i = 0; i < str.length; ++i){
        let this_char = str[i];
        let code = str.charCodeAt(i);
        code >= 97 && code <= 122 && (this_char = String.fromCharCode(code - 32));
        newStr += this_char;
    }
    return newStr;
}
console.log(upperCaseIt("wooOOOooOO let's freAKIN Go!!!"));
console.log(upperCaseIt("r"));

//A pangram is a sentence or phrase that uses every letter of the alphabet
//Write a function to return if a string contains at least one of every
//letter(not case sensitive).
//return true or false
//toUpperCase is a good idea to use
//if(str[0] >= "A" && str[0] <= "Z") can be useful
const isPangram = (str) => {
    if(str.length < 26) return false;
    const tempString = upperCaseIt(str)
    let chars = {};
    for (const idx in tempString) {
        let char = tempString[idx]
        if(char >= "A" && char <= "Z") chars[char]=1;
    }
    if(Object.keys(chars).length === 26) return true;
    return false;
}

console.log(isPangram("Waxy and quivering, jocks fumble the pizza."));//returns true
console.log(isPangram("The quick brown fo jumps over the lazy sleeping dog"));//missing x, returns false
console.log(isPangram("Sphinx of black quartz, judge my vow"));
console.log(isPangram("A"));

//Write a function to check if a string contains exactly one of every letter
//again, not case sensitive and it's ok to use toUpperCase
const isPerfectPangram = (str) => {
    if(str.length < 26) return false;
    const tempString = upperCaseIt(str)
    let chars = {};
    for (const idx in tempString) {
        let char = tempString[idx]
        if(char >= "A" && char <= "Z") {
            if (chars[char]) chars[char] += 1;
            else chars[char] = 1;
        }
    }
    if(Object.keys(chars).length === 26) {
        let valArr = Object.values(chars)
        for (const idx in valArr) {
            if(valArr[idx] > 1) return false;
        } 
        return true;
    }
    return false;
}

console.log(isPerfectPangram("The quick brown fox jumps over the lazy sleeping dog"));//should be false
console.log(isPerfectPangram("qrstuvwxyzabcdefghijkLMNOP"));//should be true
console.log(isPerfectPangram("Mr. Jock, TV quiz PhD., bags few lynx."))
console.log(isPerfectPangram("The five boxing wizards jump quickly."))


const isPangramCayla = (str) => {
    str = str.toLowerCase();
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

    for(let i = 0; i< alphabet.length; i++){
        if(str.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true;
}
