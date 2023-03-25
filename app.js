const resultContainer = document.querySelector(`.result`);
const lastResultContainer = document.querySelector(`.last-result`);
const lastEquationContainer = document.querySelector(`.last-equation`);
let lastEntry = {};

function clearDisplay() {
  resultContainer.innerHTML = ``;
  lastResultContainer.innerHTML = ``;
  lastEquationContainer.innerHTML = ``;
  delete lastEntry.lastEquation;
}

function deleteLastChar() {
  lastStr = resultContainer.innerHTML.substring(
    resultContainer.innerHTML.length - 1,
    resultContainer.innerHTML.length
  );
  console.log(lastStr);
  if (lastStr === ` `) {
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 3
    );
  } else if (resultContainer.innerHTML === `Undefined 😡`) {
    clearDisplay();
  } else {
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 1
    );
  }
}

function changeSign() {
  entries = resultContainer.innerHTML.split(` `);
  newNumber = entries[entries.length - 1] * -1;
  entries[entries.length - 1] = newNumber;
  resultContainer.innerHTML = entries.join(` `);
}

function appendValue(str) {
  resultContainer.innerHTML += str;

  entries = resultContainer.innerHTML.split(` `);
  if (Object.keys(entries).length > 3) {
    deleteLastChar();
  }

  pointCounter = resultContainer.innerHTML.match(/\D/g);
  objectLength = Object.keys(pointCounter).length;
  if (
    pointCounter[objectLength - 1] === `.` &&
    pointCounter[objectLength - 2] === `.`
  ) {
    deleteLastChar();
  }

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

function operate() {
  let result;
  entries = resultContainer.innerHTML.split(` `);
  num1 = parseFloat(entries[0]);
  num2 = parseFloat(entries[2]);
  operation = entries[1];
  if (entries[0] === "" && lastResultContainer.innerHTML!==``) {
    num1 = parseFloat(lastResultContainer.innerHTML);
  }
  switch (operation) {
    case `*`:
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 * num2;
        lastEquation(num1);
        if(result.toFixed(2) % 1 === 0){
          lastResultContainer.innerHTML = result.toFixed(0);
        } else {
          lastResultContainer.innerHTML = result.toFixed(2);
        }
        lastEquationContainer.innerHTML = lastEntry.lastEquation;
        resultContainer.innerHTML = ``;
      }
      break;
    case `/`:
      if (num2 === 0) {
        lastResultContainer.innerHTML = `Undefined 😡`;
        lastEquationContainer.innerHTML = ``;
        resultContainer.innerHTML = ``;
      } else if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 / num2;
        lastEquation(num1);
        if(result.toFixed(2) % 1 === 0){
          lastResultContainer.innerHTML = result.toFixed(0);
        } else {
          lastResultContainer.innerHTML = result.toFixed(2);
        }
        lastEquationContainer.innerHTML = lastEntry.lastEquation;
        resultContainer.innerHTML = ``;
      }
      break;
    case `+`:
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 + num2;
        lastEquation(num1);
        if(result.toFixed(2) % 1 === 0){
          lastResultContainer.innerHTML = result.toFixed(0);
        } else {
          lastResultContainer.innerHTML = result.toFixed(2);
        }
        lastEquationContainer.innerHTML = lastEntry.lastEquation;
        resultContainer.innerHTML = ``;
      }
      break;
    case `-`:
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 - num2;
        lastEquation(num1);
        if(result.toFixed(2) % 1 === 0){
          lastResultContainer.innerHTML = result.toFixed(0);
        } else {
          lastResultContainer.innerHTML = result.toFixed(2);
        }
        lastEquationContainer.innerHTML = lastEntry.lastEquation;
        resultContainer.innerHTML = ``;
      }
      break;
    case `%`:
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
      } else {
        result = num1 % num2;
        lastEquation(num1);
        if(result.toFixed(2) % 1 === 0){
          lastResultContainer.innerHTML = result.toFixed(0);
        } else {
          lastResultContainer.innerHTML = result.toFixed(2);
        }
        lastEquationContainer.innerHTML = lastEntry.lastEquation;
        resultContainer.innerHTML = ``;
      }
      break;
  }
}


function lastEquation(num1) {
  if (entries[0] === "") {
    lastEntry.lastEquation = `${num1}${resultContainer.innerHTML}`;
    console.log(lastEntry);
  } else {
    lastEntry.lastEquation = resultContainer.innerHTML;
    console.log(lastEntry);
  }
}
