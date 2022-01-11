function makeGrid(event) {
  // prevent the page from reloading
  event.preventDefault();
  // getting access to the table
  let canvasTable = document.getElementById("pixelCanvas");
  // getting access to the size input values
  let inputCells = document.getElementById("inputWidth").value;
  let inputRows = document.getElementById("inputHeight").value;
  // when form is submitted all children get removed (if any)
  while (canvasTable.firstChild) {
    canvasTable.removeChild(canvasTable.firstChild);
  }
  // for-loop for building rows and cells
  // adding an event listener to every cell
  for (let row = 0; row < inputRows; row++) {
    let rowElement = document.createElement("tr");
    canvasTable.appendChild(rowElement);
    for (let cell = 0; cell < inputCells; cell++) {
      let cellElement = document.createElement("td");
      rowElement.appendChild(cellElement);
      cellElement.addEventListener("click", colorBackground);
    }
  }
}

// select color input and set / unset background color
function colorBackground(event) {
  event.preventDefault();
  let colorInput = document.getElementById("colorPicker").value;
  let currentCell = event.target;
  // convert color input to string to make it comparable
  function compareColor(color) {
    let colorString = document.createElement("div");
    colorString.style.backgroundColor = `${color}`;
    return colorString.style.backgroundColor;
  }

  if (currentCell.style.backgroundColor === compareColor(colorInput)) {
    currentCell.setAttribute("style", "background-color: white");
  } else {
    currentCell.style.backgroundColor = colorInput;
  }
}

// select size input
// and add event listeners
let inputForm = document.getElementById("sizePicker");
inputForm.addEventListener("submit", makeGrid);
