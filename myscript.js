var counter = 0;

function createGrid(x) {
  for (var rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid'></div>");
    };
  };
  $(".grid").width(960 / x);
  $(".grid").height(960 / x);
};

function clearGrid() {
  $('.grid').remove();
}

function createNewGrid() {
  console.log(counter);
  var z = prompt("How many boxes per side do you want?");
  if (counter > 0) {
    clearGrid();
  }
  createGrid(z);
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
  counter++;
  createNewGrid();
});
