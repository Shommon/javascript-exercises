const sumAll = function(a,b){
    let seq = []
    let sum = (array) => [...array].reduce((a,i)=>a+i,0); 
    if ([...arguments].every(i => i > 0) && [...arguments].every(i => typeof i != 'string')){
        if (a < b){
            seq = sum(Array.from({length:b-a+1}, (_,i) => a + i));
        } else if (a > b){
            seq = sum(Array.from({length:a-b+1}, (_,i) => a - i));
        };
        return seq;
    } else {
        return 'ERROR'
    }
};
// console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;

// let array = [1,2,3,4,5,6,7,8];
// const sum = array.reduce((a,i)=> a + i , 0);
// console.log(sum);

// let sample = 'string'
// console.log(typeof sample == 'string')