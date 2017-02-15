//1. Create game object
var myGlobalGame;
myGlobalGame = new AmbulanceGame();

$(document).ready(function () {
  renderBoard();

});

//2. Take the initial board and place it on the screen


//3. Handle keyboard events
$(document).keydown(moveGame);

function moveGame (ev) {
  var acceptableKeys = [ 37, 65, 39, 68 ];

  if (!acceptableKeys.includes(ev.keyCode)) {
    return;
  }

  // prevent arrow key scrolling
  ev.preventDefault();

  // 4. move board in object based on keypresses (up, down, left, right)
  // move if correct keys were pressed
  switch (ev.keyCode) {
    case 37:  // left arrow
    case 65:  // a
      myGlobalGame.move('left');
      break;
    case 39:  // right arrow
    case 68:  // d
      myGlobalGame.move('right');
      break;
  }
}
//Function to place the board on the screen
function renderBoard () {
  $('#board').empty();

  myGlobalGame.board.forEach(function (row) {
    row.forEach(function (slot) {
      var ambulanceClass;

      if (slot === 1) {
        // check slot for 1 ambulance
        ambulanceClass = 'ambulance1';
      } else if (slot === 2) {
        // obstacle
        ambulanceClass = 'obstacle';
      } else if (slot === 0) {
        //hospital
        ambulanceClass = 'hospital';
      }
      else {
        // empty slot
        ambulanceClass = '';
      }

      var slotHtml = '<div class="square"><div class="slot' + ambulanceClass + '"></div></div>';
      $('#board').append(slotHtml);
    });
  });


}


function hideTop () {
  $('.board:nth-child(0)').css("display", "none");
      //("#list:nth-child(odd)");
    // $( "ul li:nth-child(2)" ).append( "<span> - 2nd!</span>" );
   //$('board').children(".square2" ).css("display", "none");
  //$('board > .square').css("display", "none");
//  $( "div" ).children( ".selected" ).css( "color", "blue" );
}
