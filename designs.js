// Select color input
let colorInput = document.getElementById("colorPicker").value;
// color gets saved as hex value

// Select size input

function makeGrid(event) {
  event.preventDefault();
  // getting access to input values and the table tag
  let inputCols = document.getElementById("inputWidth").value;
  let inputRows = document.getElementById("inputHeight").value;
  let canvasTable = document.getElementById("pixelCanvas");

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

// When size is submitted by the user, call makeGrid()
let inputForm = document.getElementById("sizePicker");
inputForm.addEventListener("submit", makeGrid);
