let display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
display.value = 0;

function appendToDisplay(input) {
  if (display.value == "0") {
    display.value = "";
  }
  display.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = error;
  }
}
function clearDisplay() {
  display.value = "";
  display.value = 0;
}

function remainder() {
  display.value = display.value / 100;
}

function deleteNumbers() {
  if (display.value.length > 0) display.value = display.value.slice(0, -1);
  if (display.value == 0) display.value = 0;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.getAttribute("data-value");
    appendToDisplay(input);
  });
});

document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("delete").addEventListener("click", () => {
  deleteNumbers();
});
document.getElementById("remainder").addEventListener("click", remainder);
document.getElementById("clear").addEventListener("click", clearDisplay);
