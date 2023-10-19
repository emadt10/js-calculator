

function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
        break
      case '-':
        return num1 - num2;
        break
      case '*':
        return num1 * num2;
        break
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "Division by zero Erorr!";
        }
        break
      default:
        return "Invalid !!";
    }
  }
  
  var num1, num2;
  
  while (isNaN(num1)) {
    num1 = parseFloat(prompt("Enter the first number:"));
    if (isNaN(num1)) {
      alert("Invalid input.enter a valid number.");
    }
  }
  
  while (isNaN(num2)) {
    num2 = parseFloat(prompt("Enter the second number:"));
    if (isNaN(num2)) {
      alert("Invalid input enter a valid number.");
    }
  }
  
  var op = prompt("Enter the operator (+, -, *, /):");
  
  while (op !== '+' && op !== '-' && op!== '*' && op !== '/') {
    op = prompt("Invalid !! enter a valid operator +, -, *, /:");
  }
  
  var result = calculate(num1, num2, op);
  document.write("Result: " + result);
  