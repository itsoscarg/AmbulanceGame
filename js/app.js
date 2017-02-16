//1. Create game object
var myGlobalGame;
myGlobalGame = new AmbulanceGame();



$(document).ready(function () {
//2. Take the initial board and place it on the screen by calling function
  generateBoard();
setInterval(function(){ moveBoard();generateBoard();},450);

});

//3. Handle keyboard events
$(document).keydown(moveGame);

function moveGame (ev) {
  var acceptableKeys = [ 37, 65, 39, 68 ];

  if (!acceptableKeys.includes(ev.keyCode)) {
    return;
  }

  // prevent arrow key scrolling
  ev.preventDefault();

  // 4. move player based on keypresses (right, left)
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


 //generateBoard function
function generateBoard () {
   hide =  100 - (myGlobalGame.stage * 5);
  console.log("hide variable is: " + hide);
  $('#board').empty();
  var slotHtml;

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
//hide the first 100 squares else show the rest
      if (hide > 0){
        slotHtml = '<div class="square2"><div class="slot' + ambulanceClass + '"></div></div>';
        $('#board').append(slotHtml);
        hide -= 1;
      } else {
        slotHtml = '<div class="square"><div class="slot' + ambulanceClass + '"></div></div>';
        $('#board').append(slotHtml);
      }
    });
  });
  hide = 100;
  }

function moveBoard() {
 myGlobalGame.stage ++;
 myGlobalGame.board.forEach(function (row, rowIndex) {
   row.forEach(function (cell, colIndex) {
     if (cell === 1) {
       myGlobalGame.board[rowIndex][colIndex] = null;
       myGlobalGame.board[rowIndex - 1][colIndex] = 1;
     }
   });
   });
 }
 generateBoard();

//  function hasWon() {
//    myGlobalGame.board.forEach(function (row, rowIndex) {
//      row.forEach(function (cell, colIndex) {
//        var myAmbulance;
//        if (cell === 1) {
//          myAmbulance = cell;
//          console.log(myAmbulance );
//  }
//   });
//   });
// }
// generateBoard();
