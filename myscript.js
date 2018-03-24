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


function checkForInputValue(boxesPerSide) {
  var floatContainer = Number.parseFloat(boxesPerSide);
  var x = Number.isInteger(floatContainer);
  if (x === false) {
    return false;
  }
  return true;
}


function createNewGrid() {
  var numberOfBoxes = prompt("How many boxes per side do you want?");
  var IsCorrect = checkForInputValue(numberOfBoxes);
  if (IsCorrect === true) {
    createGrid(numberOfBoxes);
  }
  if (IsCorrect === false) {
    alert("Input correct value");
  }
  setCurrentColor();
  setColorToGridBox();
}

function bindRefreshToButton() {
  $('#newGrid').click(function() {
    if ($('.grid').length > 0) {
      clearGrid();
    }
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
  bindRefreshToButton();
  createNewGrid();
});
