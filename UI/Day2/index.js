function calculate(operation) {
  const num1 = parseFloat(document.getElementById("input1").value);
  const num2 = parseFloat(document.getElementById("input2").value);
  const resultBox = document.getElementById("result");

  if (!input1 || !input2 || isNaN(num1) || isNaN(num2)) {
    resultBox.innerText = "Please enter valid numbers.";
    return;
  }
  if (operation === "add") {
    result = num1 + num2;
  } else if (operation === "subtract") {
    result = num1 - num2;
  } else if (operation === "multiply") {
    result = num1 * num2;
  } else {
    result = "Unknown operation";
  }

  resultBox.innerText = "Result: " + result;
}
