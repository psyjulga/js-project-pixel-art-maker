function makeGrid(event) {
  event.preventDefault();
  // getting access to size input values
  let inputCols = document.getElementById("inputWidth").value;
  let inputRows = document.getElementById("inputHeight").value;

  // when form is submitted all children get removed (if any)
  while (canvasTable.firstChild) {
    canvasTable.removeChild(canvasTable.firstChild);
  }

  // for-loop for building rows and cols
  for (let row = 0; row < inputRows; row++) {
    let rowElement = document.createElement("tr");
    canvasTable.appendChild(rowElement);
    for (let col = 0; col < inputCols; col++) {
      let colElement = document.createElement("td");
      rowElement.appendChild(colElement);
    }
  } // automatic return??
}

// select color input and set background color
function colorBackground(event) {
  event.preventDefault();
  let colorInput = document.getElementById("colorPicker").value;
  event.target.style.backgroundColor = colorInput;
}

// select size input
// when size is submitted by the user, call makeGrid()
let canvasTable = document.getElementById("pixelCanvas");
let inputForm = document.getElementById("sizePicker");

// add event listeners
inputForm.addEventListener("submit", makeGrid);
canvasTable.addEventListener("click", colorBackground);
