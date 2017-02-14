function AmbulanceGame (player1Name) {
  this.board = [
    // 0     1     2     3     4
    [ null, null, null, null, null ], // 0
    [ null, null, null, null, null ], // 1
    [ null, null, null, null, null ], // 2
    [ null, null, null, null, null ], // 3
    [ null, null, 1, null, null ], // 4
    ];


AmbulanceGame.prototype.moveLeft = function () {
    var updatedBoard = [];
    var theBoard = this.board;

    this.board.forEach(function (row, rowIndex) {
      row.forEach(function (cell, colIndex) {
      if (cell === 1) {
      theBoard[rowIndex][colIndex] = null;
      theBoard[rowIndex][colIndex - 1] = 1;
      }
        });
        });
renderBoard();
};
}



    AmbulanceGame.prototype.move = function (direction) {
        if (this.hasWon || this.hasLost) {
        return;
      }

      switch (direction) {
        case 'left':
          this.moveLeft();
          break;
        // case 'right':
        //   this.moveRight();
        //   break;
      }
//};
  };
