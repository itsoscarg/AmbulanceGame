function AmbulanceGame (player1Name) {
  this.board = [
    // 0     1     2     3     4
    [ null, null, 0, null, null ], // 0
    [ null, null, null, null, null ], // 0
    [ null, null, null, null, null ], // 0
    [ null, null, null, null, null ], // 0
    [ null, null, null, null, null ], // 0
    [ null, null, null, null, null ], // 1
    [ null, 2, null, null, null ], // 2
    [ null, null, null, null, null ], // 3
    [ null, null, 1, null, null ], // 4
    ];
this.stage = 0;
}
//moveLeft Function
AmbulanceGame.prototype.moveLeft = function () {
    var updatedBoard = [];
    var theBoard = this.board;

    this.board.forEach(function (row, rowIndex) {
      row.forEach(function (cell, colIndex) {
      if (cell === 1) {
        if (colIndex === 0) {
          return;
        }
      else {
      theBoard[rowIndex][colIndex] = null;
      theBoard[rowIndex][colIndex - 1] = 1;
    }}
generateBoard();
    });
  });
};

//moveRight function
AmbulanceGame.prototype.moveRight = function () {
    var updatedBoard = [];
    var theBoard = this.board;
    var found = false;

    this.board.forEach(function (row, rowIndex) {
      row.forEach(function (cell, colIndex) {
      if ((cell === 1) && found === false)  {
        if (colIndex === 4) {
          return;
        }
        else {
          found = true;
      theBoard[rowIndex][colIndex] = null;
      theBoard[rowIndex][colIndex + 1] = 1;
    }}
generateBoard();
    });
  });
};
//Move switch
    AmbulanceGame.prototype.move = function (direction) {
        if (this.hasWon || this.hasLost) {
        return;
      }

      switch (direction) {
        case 'left':
          this.moveLeft();
          break;
        case 'right':
           this.moveRight();
           break;
      }

};

    
