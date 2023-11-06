const convertToCelsius = function(temp) {
  let celc = (temp-32)*(5/9);
  if (celc == Math.floor(celc)){
    return celc;
  } else {
    return +celc.toFixed(1);
  }
};

const convertToFahrenheit = function(temp) {
  let farh = (temp*(9/5))+32;
  if (farh == Math.floor(farh)){
    return farh;
  } else {
    return +farh.toFixed(1);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// console.log(convertToCelsius(100))
