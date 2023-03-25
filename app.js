const resultContainer = document.querySelector(`.result`);
const lastResultContainer = document.querySelector(`.last-result`);
const lastEquationContainer = document.querySelector(`.last-equation`);
let lastEntry = {};

// Function to clear all the display in calculator
function clearDisplay() {
  resultContainer.innerHTML = ``;
  lastResultContainer.innerHTML = ``;
  lastEquationContainer.innerHTML = ``;
  // Delete the key lastEquation in the object lastEntry
  delete lastEntry.lastEquation;
}

// Function to delete the last typed character
function deleteLastChar() {

  // Checking the last character in the string
  lastStr = resultContainer.innerHTML.substring(
    resultContainer.innerHTML.length - 1,
    resultContainer.innerHTML.length
  );

  // If it is ` ` it means it comes from ` + `, delete the last 3 characters
  if (lastStr === ` `) {
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 3
    );
  } 
  // Else just delete one character at a time
  else {
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 1
    );
  }
}

// Function to change sign the last inputed number
function changeSign() {
  entries = resultContainer.innerHTML.split(` `);
  newNumber = entries[entries.length - 1] * -1;
  entries[entries.length - 1] = newNumber;
  resultContainer.innerHTML = entries.join(` `);
}

// Funtion to append values when you click the buttons
function appendValue(str) {
  // To add new entries in the calcu (number or operation)
  resultContainer.innerHTML += str;

  // This is to limit the operation to two numbers at a time
  entries = resultContainer.innerHTML.split(` `);
  if (Object.keys(entries).length > 3) {
    deleteLastChar();
  }

  // This is to limit the decimal of the inputed number to only one
  //  /\D/g is regex for global search non degit
  pointCounter = resultContainer.innerHTML.match(/\D/g);
  objectLength = Object.keys(pointCounter).length;
  if (
    pointCounter[objectLength - 1] === `.` &&
    pointCounter[objectLength - 2] === `.`
  ) {
    deleteLastChar();
  }

  // This is to ensure that to two operation inputed in the calcu
  lastSixStr = resultContainer.innerHTML.substring(
    resultContainer.innerHTML.length - 6,
    resultContainer.innerHTML.length
  );

  if (
    lastSixStr === ` +  + ` ||
    lastSixStr === ` -  - ` ||
    lastSixStr === ` *  * ` ||
    lastSixStr === ` /  / ` ||
    lastSixStr === ` %  % `
  ) {
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 3
    );
  }
}

// Function for equal operator
function operate() {
  let result;
  entries = resultContainer.innerHTML.split(` `);
  // Need to parseFloat() because the entries are in string
  num1 = parseFloat(entries[0]);
  num2 = parseFloat(entries[2]);
  operation = entries[1];

  // This is for operation using the last answer
  if (entries[0] === "") {
    num1 = parseFloat(lastResultContainer.innerHTML);
  }

  switch (operation) {
    case `*`:
      // If theres no second number inputed
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 * num2; 
        lastEquation(num1);
        showAnswer(result);
      }
      break;
    case `/`:
      // If you devide a number by 0
      if (num2 === 0) {
        lastResultContainer.innerHTML = `Undefined 😡`;
        lastEquationContainer.innerHTML = ``;
        resultContainer.innerHTML = ``;
      } 
      // If theres no second number inputed
      else if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 / num2;
        lastEquation(num1);
        showAnswer(result);
      }
      break;
    case `+`:
      // If theres no second number inputed
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 + num2;
        lastEquation(num1);
        showAnswer(result);
      }
      break;
    case `-`:
      // If theres no second number inputed
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 - num2;
        lastEquation(num1);
        showAnswer(result);
      }
      break;
    case `%`:
      // If theres no second number inputed
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 % num2;
        lastEquation(num1);
        showAnswer(result);
      }
      break;
  }
}

// This function is for adding to the object lastEntry the key lastEquation
// This stores your last inputed equations
function lastEquation(num1) {
  if (entries[0] === "") {
    lastEntry.lastEquation = `${num1}${resultContainer.innerHTML}`;
    console.log(lastEntry);
  } else {
    lastEntry.lastEquation = resultContainer.innerHTML;
    console.log(lastEntry);
  }
}

// This function is for showing result in screen
function showAnswer(result){
  // This if else statement is for the fix in javascript floating point precision errors
  if(result.toFixed(2) % 1 === 0){
    lastResultContainer.innerHTML = result.toFixed(0);
  } else {
    lastResultContainer.innerHTML = result.toFixed(2);
  }
  lastEquationContainer.innerHTML = lastEntry.lastEquation;
  resultContainer.innerHTML = ``;
}
