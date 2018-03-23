var counter = 0;

function createGrid(boxesPerSide) {
  for (var rows = 0; rows < boxesPerSide; rows++) {
    for (var columns = 0; columns < boxesPerSide; columns++) {
      $("#container").append("<div class='grid'></div>");
    };
  };
  $(".grid").width(960 / boxesPerSide);
  $(".grid").height(960 / boxesPerSide);
};

function clearGrid() {
  $('.grid').remove();
}

/*function checkForInputValue(x) {
  typeOfInputValue = isNaN(x);
  if (typeOfInputValue == true)
    alert("Input correct value");
  else if (x % 1 !== 0 & counter === 1) {
    clearGrid(); //чистит и опять создает или че??????
    alert("Input correct value");
  } */
function checkForInputValue(boxesPerSide) {
  var isNumber = isNaN(boxesPerSide);
  if (isNumber === true)
    return false;
  else if (boxesPerSide % 1 !== 0 & counter === 1) {
    return false;
  }
  else {
    return true
  }
}


function createNewGrid() {
  var numberOfBoxes = prompt("How many boxes per side do you want?");
  var IsCorrect = checkForInputValue(numberOfBoxes);
  if (IsCorrect === true) {
    //createGrid(numberOfBoxes);
  }
  else {
    alert("Input correct value");
  }
  if ('.grid' in document || counter === 1) {
    console.log("true"); //хай пока будет
    clearGrid();
  }
  createGrid(numberOfBoxes);
  setCurrentColor();
  setColorToGridBox();
}

function bindRefreshToDiv() {
  $('#newGrid').click(function() {
    createNewGrid();
  });
}

function setCurrentColor() {
  $('.colorBoxes').click(function() {
    var containerForBackgroundColor = $(this).css('background-color');
    document.getElementById("currentColor").style.backgroundColor = containerForBackgroundColor;
  });
}

function setColorToGridBox() {
  $('.grid').click(function() {
    var containerForCurrentColor = $('#currentColor').css('background-color');
    $(this).css('background-color', containerForCurrentColor);
  });
}

$(document).ready(function() {
  bindRefreshToDiv();
  createNewGrid();
  counter++;
});
