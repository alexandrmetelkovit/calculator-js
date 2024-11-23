const firstInputNode = document.getElementById("first-number");
const secondInputNode = document.getElementById("second-number");

const incrementNode = document.getElementById("increment");
const decrementNode = document.getElementById("decrement");
const deletionNode = document.getElementById("deletion");
const multiplicationNode = document.getElementById("multiplication");

const resultNode = document.getElementById("result");
const resetNode = document.getElementById("reset");

const initialRes = 0;

const clearInput = () => {
  firstInputNode.value = "";
  secondInputNode.value = "";
};

const getFirstInputNumber = () => {
  const value = +firstInputNode.value;
  return isNaN(value) ? null : value;
};
const getSecondInputNumber = () => {
  const value = +secondInputNode.value;
  return isNaN(value) ? null : value;
};

const performOperation = (operation) => {
  const firstNumber = getFirstInputNumber();
  const secondNumber = getSecondInputNumber();

  if (firstNumber === null || secondNumber === null) {
    resultNode.innerText = "Введите числа";
    return;
  }

  let result;
  switch (operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "divide":
      if (secondNumber === 0) {
        resultNode.innerText = "на 0 делить нельзя";
        return;
      }
      result = firstNumber / secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
  }
  resultNode.innerText = result;
  clearInput();
};

// const handlePlusResult = () => {
//   resultNode.innerText = getFirstInputNumber() + getSecondInputNumber();
//   clearInput();
// };
// const handleMinusResult = () => {
//   resultNode.innerText = getFirstInputNumber() - getSecondInputNumber();
//   clearInput();
// };
// const handleDelResult = () => {
//   resultNode.innerText = getFirstInputNumber() / getSecondInputNumber();
//   clearInput();
// };
// const handleMultiplyResult = () => {
//   resultNode.innerText = getFirstInputNumber() * getSecondInputNumber();
//   clearInput();
// };

// const handleResetResult = () => {
//   resultNode.innerText = initialRes;
// };

incrementNode.addEventListener("click", () => performOperation("add"));
decrementNode.addEventListener("click", () => performOperation("subtract"));
deletionNode.addEventListener("click", () => performOperation("divide"));
multiplicationNode.addEventListener("click", () =>
  performOperation("multiply")
);
resetNode.addEventListener("click", () => {
  resultNode.innerText = initialRes; // Сбрасываем результат
});
