const leapYears = function(year) {
    // Check if the loophole leap year is true
    if (year % 100 == 0 && year % 400 != 0){
        return false;
    // Check of year is dividible by 4
    } else if (year % 4 == 0){
        return true;
    } else {
        return false;
    }
};
console.log(leapYears(700));
// Do not edit below this line
module.exports = leapYears;
