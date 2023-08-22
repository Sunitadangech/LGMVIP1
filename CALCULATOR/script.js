let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("result").value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = "";
}
