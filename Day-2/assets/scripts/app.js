const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];


function getUserNumberInput() {
  return parseInt(userInput.value);
}


function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function WriteToLog(
  identifier , prevResult , 
  operationNumber , newResult){

  const logEntry = {

    operation: identifier,
    prevResult: prevResult,
     number: operationNumber, 
     result: newResult
      };
      logEntries.push(logEntry);
      console.log(logEntries);
}

function calResult(calType) {
  const enteredNumber = getUserNumberInput();

 if(
   calType !== 'ADD' && calType !== 'SUBTRACT' &&
   calType !== 'multi' && calType !== 'divide' ||
   !enteredNumber
 ) {
   return;
 }
  const initialResult = currentResult;
  let mathOperator;
  if(calType == 'ADD'){
    currentResult = currentResult + enteredNumber;
  mathOperator = '+';
  }else if(calType == 'SUBTRACT'){

    currentResult = currentResult - enteredNumber;
    mathOperator = '-';
  }
  else if(calType == 'multi'){
    currentResult = currentResult * enteredNumber;
    mathOperator = '*';
  }
  else{
    currentResult = currentResult / enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  WriteToLog(calType , initialResult , enteredNumber , currentResult);


}

function add() {
  calResult('ADD');  
}

function subtract() {
  calResult('SUBTRACT');  
}

function multiply() {
  calResult('multi'); 
}

function divide() {
  calResult('divide'); 
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);