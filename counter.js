let counterValueEle = document.getElementById('counterValue');

function updateCounterValue(value) {
  counterValueEle.textContent = value;
  if (value > 0) {
    counterValueEle.style.color = "green";
  } else if (value < 0) {
    counterValueEle.style.color = "red";
  } else {
    counterValueEle.style.color = "black";
  }
}

function onIncrement() {
  let currentValue = parseInt(counterValueEle.textContent);
  updateCounterValue(currentValue + 1);
}

function onDecrement() {
  let currentValue = parseInt(counterValueEle.textContent);
  updateCounterValue(currentValue - 1);
}

function onReset() {
  updateCounterValue(0);
}