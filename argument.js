// Argument 인자

function add(num1, num2) {
  return num1 + num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function surprise(argument) {
  const result = argument(2, 3);
  console.log(result);
}

surprise(add);
