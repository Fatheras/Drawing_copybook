function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};
function clearGrid() {
  $('.grid').removeClass();
}
function refreshGrid() {
  var z = prompt("How many boxes per side do you want?");
  clearGrid();
  createGrid(z);
}
$(document).ready(function() {
    createGrid(16);
    $('#newGrid').click(function() {
      refreshGrid();
    });
    });
