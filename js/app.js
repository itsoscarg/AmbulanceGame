//1. Create game object
var myGlobalGame;
myGlobalGame = new AmbulanceGame();



$(document).ready(function () {
//2. Take the initial board and place it on the screen by calling function
  generateBoard();
setInterval(function(){ moveBoard();generateBoard();},400);
ion.sound({
  sounds: [{name: "siren"}, {name: "applause"}, {name: "crash"}],

  path: "lib/ion.sound-3.0.7/sounds/",
  preload: true,
  volume: 1.0
});
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
   hide =  400 - (myGlobalGame.stage * 5);
  console.log("hide variable is: " + hide);
  $('#board').empty();
  var slotHtml;

  ion.sound.play("siren");
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
//hide the first 400 squares else show the rest
      if (hide > 0){
        slotHtml = '<div class="square2"><div class="slot' + ambulanceClass + '"></div></div>';
        $('#board').append(slotHtml);
        hide -= 1;
      } else {
        slotHtml = '<div class="square"><div class="slot' + ambulanceClass + '"></div></div>';
        $('#board').append(slotHtml);
        }
      //hasWon();
    });
  });
  hide = 400;
  }
//this will show you each row and make it seem like the board is moving
function moveBoard() {
 myGlobalGame.stage ++;
 myGlobalGame.board.forEach(function (row, rowIndex) {
   row.forEach(function (cell, colIndex) {
     if (cell === 1) {
        hasLost(myGlobalGame.board[rowIndex - 1][colIndex]);
       myGlobalGame.board[rowIndex][colIndex] = null;
       myGlobalGame.board[rowIndex - 1][colIndex] = 1;
     }

   });
   });
hasWon();
hasLost();
 }

 function hasWon() {
      if (myGlobalGame.board[0][2] === 1) {
      $('.container').hide();
      var winnerHtml = '<img src="./img/hospital.gif" alt="Winner">';
      $('body').append(winnerHtml);
     }
    ion.sound.play("applause");
}

function hasLost(coords){
  if (coords === 2){
    $('.container').hide();
    var loserHtml = '<img src="./img/crash2.gif" alt="Loser">';
    $('body').append(loserHtml);
  }
  ion.sound.play("crash");
}



// {
//   $('#game-board').remove();
  // var winnerHtml = '<img src="https://media.giphy.com/media/xTiTnz33weTH3K8Uvu/giphy.gif" alt="Winner">';
  // $('body').append(winnerHtml);
// }
//
// else if (myGlobalGame.hasLost) {
//   ion.sound.play('beer_can_opening');
//   $('#game-board').remove();
//   var loserHtml = '<img src="https://media.giphy.com/media/l3q2K12v7LgvwlATC/giphy.gif" alt="Loser">';
//   $('body').append(loserHtml);
// }

// function hasLost() {
//   myGlobalGame.board.forEach(function (row, rowIndex) {
//     row.forEach(function (cell, colIndex) {
//       if (myGlobalGame.board[2][0] === 1) {
//      alert("Oh no! You crashed!");
//     }
//  });
//  });
// }
hasWon();
generateBoard();
