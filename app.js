const resultContainer = document.querySelector(`.result`);
const lastResultContainer = document.querySelector(`.last-resultContainer`);

function clearDisplay() {
  resultContainer.innerHTML = ``;
  lastResultContainer.innerHTML = ``;
}

function deleteLastChar() {
  lastStr = resultContainer.innerHTML.substring(resultContainer.innerHTML.length-1, resultContainer.innerHTML.length);
  console.log(lastStr)
  if(lastStr===` `){
    resultContainer.innerHTML = resultContainer.innerHTML.substring(
      0,
      resultContainer.innerHTML.length - 3
    );
  } else if (resultContainer.innerHTML===`Undefined 😡`){
    clearDisplay();
  }
  else{
  resultContainer.innerHTML = resultContainer.innerHTML.substring(
    0,
    resultContainer.innerHTML.length - 1
  );
  }
}

function changeSign() {
  entries = resultContainer.innerHTML.split(` `);
  console.log(entries);
  newNumber = entries[entries.length - 1] * -1;
  entries[entries.length - 1] = newNumber;
  resultContainer.innerHTML = entries.join(` `);
}

function appendValue(str) {
  resultContainer.innerHTML += str;

  entries = resultContainer.innerHTML.split(` `);
  if(Object.keys(entries).length>3){
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
  console.log(lastSixStr)

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

function calculate() {
  entries = resultContainer.innerHTML.split(` `);
  num1 = parseFloat(entries[0]);
  num2 = parseFloat(entries[2]);
  operation = entries[1];
  console.log(num1);
  console.log(num2);
  console.log(operation);
  let result;
  switch (operation) {
    case `*`:
      result = num1 * num2;
      resultContainer.innerHTML = result;
      break;
    case `/`:
      if(num2===0){
        resultContainer.innerHTML = `Undefined 😡`
      }else{
        result = num1 / num2;
        resultContainer.innerHTML = result;
      }
      break;
    case `+`:
      result = num1 + num2;
      resultContainer.innerHTML = result;
      break;
    case `-`:
      result = num1 - num2;
      resultContainer.innerHTML = result;
      break;
    case `%`:
      result = num1 % num2;
      resultContainer.innerHTML = result;
      break;
  }
}
