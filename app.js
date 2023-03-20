const resultContainer = document.querySelector(`.result`);
const lastResultContainer = document.querySelector(`.last-resultContainer`);

function clearDisplay() {
  resultContainer.innerHTML = ``;
  lastResultContainer.innerHTML = ``;
}

function deleteLastChar() {
  resultContainer.innerHTML = resultContainer.innerHTML.substring(
    0,
    resultContainer.innerHTML.length - 1
  );
}

function changeSign(){
    entries = resultContainer.innerHTML.split(` `);
    console.log(entries)
    newNumber = entries[entries.length-1]*-1;
    entries[entries.length-1] = newNumber;
    resultContainer.innerHTML = entries.join(` `);
}

function appendValue(str) {
  resultContainer.innerHTML += str;
  
  // numbers = resultContainer.innerHTML.match(/\d+(\.\d+)?/g).map(Number);
  // console.log(numbers)
  // if(Object.keys(numbers).length===2){

  // }

  pointCounter = resultContainer.innerHTML.match(/\D/g);
  objectLength = Object.keys(pointCounter).length;
  if (
    pointCounter[objectLength - 1] === `.` &&
    pointCounter[objectLength - 2] === `.`
  ) {
    deleteLastChar();
  }

  lastTwoStr = resultContainer.innerHTML.substring(
    resultContainer.innerHTML.length - 2,
    resultContainer.innerHTML.length
  );

  lastThreeStr = resultContainer.innerHTML.substring(
    resultContainer.innerHTML.length - 3,
    resultContainer.innerHTML.length
  );
  if (
    lastTwoStr === `..` ||
    lastTwoStr === `**` ||
    lastTwoStr === `//` ||
    lastTwoStr === `²²` ||
    lastTwoStr === `%%`
  ) {
    deleteLastChar();
  }
  if (lastThreeStr === `+++` || lastThreeStr === `---`) {
    deleteLastChar();
  }
}

function calculate() {
  entries = resultContainer.innerHTML.split(` `);
  num1 = parseFloat(entries[0]);
  num2 = parseFloat(entries[2]);
  operation = entries[1]
console.log(num1)
console.log(num2)
console.log(operation)
  var result;
  switch (operation) {
    case `*`:
      result = num1 * num2;
      resultContainer.innerHTML = result;
      break;
    case `/`:
      result = num1 / num2;
      resultContainer.innerHTML = result;
      break;
    case `+`: 
      result = num1 + num2;
      resultContainer.innerHTML = result;
      break;
    case `-`:
      result = num1 - num2;
      resultContainer.innerHTML = result;
      break;
  }
}
