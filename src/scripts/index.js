//elements used
let redRange = document.querySelector("#red-slider");
let greenRange = document.querySelector("#green-slider");
let blueRange = document.querySelector("#blue-slider");
let hexVal_out = document.querySelector('#hexVal');
let colorDemo = document.querySelector("#backgroundColor");

//onmousemove
function getRedValue(element) {
  let button = document.querySelector("#red-input");
  button.value = element.value;
  setColors();
}

function getGreenValue(element) {
  let button = document.querySelector("#green-input");
  button.value = element.value;
  setColors();
}

function getBlueValue(element) {
  let button = document.querySelector("#blue-input");
  button.value = element.value;
  setColors();
}

//onchange Event
redRange.addEventListener("change", function () {
  let button = document.querySelector("#red-input");
  let redValue = redRange.value;
  button.value = redValue;
  setColors();
});

greenRange.addEventListener("change", function () {
  let button = document.querySelector("#green-input");
  let greenValue = greenRange.value;
  button.value = greenValue;
  setColors();
});

blueRange.addEventListener("change", function () {
  let button = document.querySelector("#blue-input");
  let blueValue = blueRange.value;
  button.value = blueValue;
  setColors();
});

//reset values
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetValues);

function resetValues() {
  let redInput = document.querySelector("#red-input");
  let greenInput = document.querySelector("#green-input");
  let blueInput = document.querySelector("#blue-input");

  redInput.value = 0;
  greenInput.value = 0;
  blueInput.value = 0;

  redRange.value = 0;
  greenRange.value = 0;
  blueRange.value = 0;

  colorDemo.style.backgroundColor = `rgb(${redInput.value},${greenInput.value},${blueInput.value})`;
  hexVal_out.textContent = '#000000';
}

//apply values
function setColors() {
  let redValue = redRange.value;
  let greenValue = greenRange.value;
  let blueValue = blueRange.value;

  let r_hexVal = parseInt(redValue, 10).toString(16),
    g_hexVal = parseInt(greenValue, 10).toString(16),
    b_hexVal = parseInt(blueValue, 10).toString(16),
    hexVal = "#" + hexColor(r_hexVal) + hexColor(g_hexVal) + hexColor(b_hexVal);

  hexVal_out.value = hexVal;

  //interpolation values decimal colors
  colorDemo.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
}

//0 - ff on R,G,B values
function hexColor(x) {
  console.log(x)
  return (x.length < 2) ? "0" + x : x;
}