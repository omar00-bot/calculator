const resultContainer = document.querySelector(`.result`);
const lastResultContainer = document.querySelector(`.last-result`);
let operated = false;

function clearDisplay() {
  resultContainer.innerHTML = ``;
  lastResultContainer.innerHTML = ``;
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
  if (operated === true) {
    lastResultContainer.innerHTML = resultContainer.innerHTML;
    resultContainer.innerHTML = ``;
    operated = false;
  }
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
  entries = resultContainer.innerHTML.split(` `);
  console.log(entries);
  let result;
  num1 = parseFloat(entries[0]);
  num2 = parseFloat(entries[2]);
  operation = entries[1];
  if (entries[0] === "") {
    num1 = parseFloat(lastResultContainer.innerHTML);
  }
  switch (operation) {
    case `*`:
      result = num1 * num2;
      resultContainer.innerHTML = result;
      operated = true;
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
        operated = false;
      }
      break;
    case `/`:
      if (num2 === 0) {
        resultContainer.innerHTML = `Undefined 😡`;
        operated = false;
      } else if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
        operated = false;
      } else {
        result = num1 / num2;
        resultContainer.innerHTML = result;
        operated = true;
      }
      break;
    case `+`:
      result = num1 + num2;
      resultContainer.innerHTML = result;
      operated = true;
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
        operated = false;
      }
      break;
    case `-`:
      result = num1 - num2;
      resultContainer.innerHTML = result;
      operated = true;
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
        operated = false;
      }
      break;
    case `%`:
      result = num1 % num2;
      resultContainer.innerHTML = result;
      operated = true;
      if (entries[2] === ``) {
        resultContainer.innerHTML = entries.join(` `);
        operated = false;
      }
      break;
  }
}
