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

function appendValue(str) {
  resultContainer.innerHTML += str;

pointCounter = resultContainer.innerHTML.match(/\D/g);
objectLength = Object.keys(pointCounter).length;
if(pointCounter[objectLength-1] === `.` && pointCounter[objectLength-2] === `.`){
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
  operation = resultContainer.innerHTML.match(/[\+\-\/\*\%]/);
  index = resultContainer.innerHTML.search(/[\+\-\/\*\%]/);
  num1 = parseFloat(resultContainer.innerHTML.slice(0, index));
  num2 = parseFloat(resultContainer.innerHTML.slice(index + 1));
  console.log(operation[0])
  var result;
  switch (operation[0]) {
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

