const removeFromArray = function(array) {
    let mainArray = array;
    const args = [...arguments].slice(1,arguments.length);
    for (i in args){
        if (mainArray.includes(args[i])){
            mainArray.splice(mainArray.indexOf(args[i]),1);
        }
        
    }
    return mainArray
};

// Do not edit below this line
module.exports = removeFromArray;
