/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const unitNumber = document.getElementById("unit-el")
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToLbs = 2.204

convertBtn.addEventListener("click", function() {
    const thisUnit = unitNumber.value    
    lengthEl.innerHTML = `${thisUnit} meters = ${(thisUnit*meterToFeet).toFixed(2)} feet | ${thisUnit} feet = ${(thisUnit / meterToFeet).toFixed(2)} meters`
    volumeEl.innerHTML = `${thisUnit} liters = ${(thisUnit*literToGallon).toFixed(2)} gallons | ${thisUnit} gallons = ${(thisUnit / literToGallon).toFixed(2)} liters`
    massEl.innerHTML = `${thisUnit} kilograms = ${(thisUnit*kiloToLbs).toFixed(2)} pounds | ${thisUnit} pounds = ${(thisUnit / kiloToLbs).toFixed(2)} kilograms`
})

const maxValue = 99999
document.querySelector("#unit-el")
  .addEventListener("keypress", function(e) {
    e.preventDefault();
    var input = e.target;
    var value = Number(input.value);
    var key = Number(e.key);
    if (Number.isInteger(key)) {
      value = Number("" + value + key);
      if (value > maxValue) {
        return false;
      }
      input.value = value;
    }
  });
  
  document.getElementById('unit-el').addEventListener('focus', function() {
    document.getElementById('inputToolTip').style.display = "block"
    });

  document.getElementById('unit-el').addEventListener('blur', function() {
    document.getElementById('inputToolTip').style.display = "none"
    });
