let fibStart = [0,1];

//Return Last two items in the array
function lastTwo(array){
    return array.slice(array.length-2);;
}

const fibonacci = function(num) {
    //convert string to number
    num = parseInt(num);
    if (num >= 0){
        for (i=0; i<num; i++){
            // Sum last two items and push into the sequence
            fibStart.push(lastTwo(fibStart).reduce((a,i) => a+i, 0));
        }
        return fibStart[num]
    } else {
        return "OOPS"
    }
}

// Do not edit below this line
module.exports = fibonacci;

// console.log(fibonacci("8"));
