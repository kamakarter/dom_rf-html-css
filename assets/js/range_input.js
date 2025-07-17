window.onload = function () {
    slideOne();
    slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let minInput = document.querySelector('.range-min-input');
let maxInput = document.querySelector('.range-max-input');
let sliderTrack = document.querySelector(".slider-track");

// Настоящие границы диапазона
const REAL_MIN = 0.34;
const REAL_MAX = 12.95;

function percentToValue(percent) {
  return (REAL_MIN + (REAL_MAX - REAL_MIN) * (percent / 100));
}
function valueToPercent(value) {
  return ((value - REAL_MIN) / (REAL_MAX - REAL_MIN)) * 100;
}

function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0) {
    sliderOne.value = sliderTwo.value;
  }
  const val = percentToValue(parseFloat(sliderOne.value));
  minInput.value = val.toFixed(2);
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= 0) {
    sliderTwo.value = sliderOne.value;
  }
  const val = percentToValue(parseFloat(sliderTwo.value));
  maxInput.value = val.toFixed(2);
  fillColor();
}

// Синхронизация input -> range
minInput.addEventListener('change', function() {
  let value = parseFloat(this.value);
  if (isNaN(value)) value = REAL_MIN;
  if (value < REAL_MIN) value = REAL_MIN;
  if (value > REAL_MAX) value = REAL_MAX;
  if (value > parseFloat(maxInput.value)) value = parseFloat(maxInput.value);
  this.value = value.toFixed(2);
  sliderOne.value = valueToPercent(value);
  slideOne();
});

maxInput.addEventListener('change', function() {
  let value = parseFloat(this.value);
  if (isNaN(value)) value = REAL_MAX;
  if (value < REAL_MIN) value = REAL_MIN;
  if (value > REAL_MAX) value = REAL_MAX;
  if (value < parseFloat(minInput.value)) value = parseFloat(minInput.value);
  this.value = value.toFixed(2);
  sliderTwo.value = valueToPercent(value);
  slideTwo();
});

function fillColor() {
  let percent1 = sliderOne.value;
  let percent2 = sliderTwo.value;
  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
  