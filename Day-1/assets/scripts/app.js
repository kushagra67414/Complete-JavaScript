const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){

  return parseInt(userInput.value);
}
function creatAndWriteOutput(operator , resultBeforeCalc , calcNumber){
  const calcDescriptions = ` ${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult( currentResult , calcDescriptions );

}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber ;
  creatAndWriteOutput('+' , initialResult , enteredNumber );
  
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber ;
  creatAndWriteOutput('-' , initialResult , enteredNumber );
}
addBtn.addEventListener('click' , add);
subtractBtn.addEventListener('click', subtract);