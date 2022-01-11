// Select color input
let colorInput = document.getElementById("colorPicker").value;
// color gets saved as hex value

// Select size input
let inputCols = document.getElementById("inputHeight").value; // i.e. 30
let inputRows = document.getElementById("inputWidth").value; // i.e. 20
// input gets saved as number

// When size is submitted by the user, call makeGrid()
let inputForm = document.getElementById("sizePicker");
inputForm.addEventListener("submit", makeGrid);
// not tested yet

function makeGrid() {
  let canvasTable = document.getElementById("pixelCanvas");
  // later: set equal to result of loop that creates html

  let rowElement = `<tr></tr>`;
  let colElement = `<td></td>`;

  for (let row = 1; row < inputRows; row++) {
    rowElement += rowElement; // adds one row every time
    for (let col = 1; col < inputCols; col++) {
      colElement += colElement; // adds one col / cell every time
    }
  }
}
