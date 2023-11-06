//Remove all Punctuation and white spa
function processString(string){
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"'<> ]/g, '').toUpperCase();
}
function reversed(string){
    return string.split("").reverse().join("").toUpperCase();
}
    
const palindromes = function (string) {
    if (processString(reversed(string)) == processString(string)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes('racecar'))
// console.log(palindromes('r3ace3car'))