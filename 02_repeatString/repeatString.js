const repeatString = function(text, num) {
    if (num > 0){
        let repeat = text;
        for (i = 0 ;i < num-1; i++){
            repeat = repeat + text;
        }
        return repeat
    } else if (num < 0){
        return 'ERROR';
    } else if (text == ''){
        return '';
    } else {
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;
