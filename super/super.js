class Board {
    constructor() {
      this.board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
      this.winner = null;
      this.sum = 0;
    }
  
    updateWinner() {
      if (this.winner != null){return;}
  
      // Helper function to check if three values are equal and not empty
      function equals3(a, b, c) {
        return a === b && b === c && a !== 0;
      }
  
      // Check horizontally
      for (let i = 0; i < 3; i++) {
        if (equals3(this.board[i][0], this.board[i][1], this.board[i][2])) {
          this.sum = 9*this.board[i][0];
        }
      }
  
      // Check vertically
      for (let i = 0; i < 3; i++) {
        if (equals3(this.board[0][i], this.board[1][i], this.board[2][i])) {
          this.sum = 9*this.board[0][i];
        }
      }
  
      // Check diagonally
      if (equals3(this.board[0][0], this.board[1][1], this.board[2][2])) {
        this.sum = 9*this.board[0][0];
      }
      if (equals3(this.board[2][0], this.board[1][1], this.board[0][2])) {
        this.sum = 9*this.board[2][0];
      }
  
      // Check for a tie
      let openSpots = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (this.board[i][j] === 0) {
            openSpots++;
          }
        }
      }
  
      if (this.winner === null && openSpots === 0) {
        this.winner = 'tie';
      } else if (this.sum === 9) {
        this.winner = 'X';
      } else if (this.sum === -9) {
        this.winner = 'O';
      }
    }
  }
  
class SuperBoard {
  constructor() {
    this.sboard = [];
    this.winner = null;
    this.sSum = 0;

    // Initialize the 3x3 array of Board instances
    for (let i = 0; i < 3; i++) {
      this.sboard[i] = [];
      for (let j = 0; j < 3; j++) {
        this.sboard[i][j] = new Board();
      }
    }
  }

  updateWinner() {
    if (this.winner != null){return;}

    // Helper function to check if three values are equal and not empty
    function equals3(a, b, c) {
      return a === b && b === c && a !== null && a !== 'tie';
    }

    // Check horizontally
    for (let i = 0; i < 3; i++) {
      if (equals3(this.sboard[i][0].winner, this.sboard[i][1].winner, this.sboard[i][2].winner)) {
        this.winner = this.sboard[i][0].winner;
      }
    }

    // Check vertically
    for (let i = 0; i < 3; i++) {
      if (equals3(this.sboard[0][i].winner, this.sboard[1][i].winner, this.sboard[2][i].winner)) {
        this.winner = this.sboard[0][i].winner;
      }
    }

    // Check diagonally
    if (equals3(this.sboard[0][0].winner, this.sboard[1][1].winner, this.sboard[2][2].winner)) {
      this.winner = this.sboard[0][0].winner;
    }
    if (equals3(this.sboard[2][0].winner, this.sboard[1][1].winner, this.sboard[0][2].winner)) {
      this.winner = this.sboard[2][0].winner;
    }

    // Check for a tie
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.sboard[i][j].winner === null) {
          openSpots++;
        }
      }
    }

    if (this.winner === null && openSpots === 0) {
      this.winner = 'tie';
      this.sSum = 0;
    }
    if(this.winner == 'X'){this.sSum = 81;}
    else if(this.winner == 'O'){this.sSum = -81;}
    else{this.evaluateBoard();}
  }

  printBoard(){
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
        let toPrint = "| ";
        for(let k=0; k<3; k++){
          for(let l=0; l<3; l++){
            toPrint += this.sboard[i][k].board[j][l];
            toPrint += " ";
          }
          toPrint += "| ";
        }
        console.log(toPrint);
      }
      console.log("|-------|-------|-------|");
    }
  }

  evaluateBoard(){
    if(this.winner === null || this.winner === 'tie'){
      this.sSum = 0;
      for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
          this.sSum += this.sboard[i][j].sum;
          //console.log('value at (' + i + ',' + j + ') is ' + this.sboard[i][j].sum);
        }
      }
    }
  }
}

// game:
const superBoard = new SuperBoard();
let currentPlayer = 'X';
let currentValue = 1;
const buttons = document.querySelectorAll(".gamebutton"); // Get all buttons with the class "gamebutton"

// Function to handle button click
function nextMove(button, sRow, sCol, row, col) {
  // update the subboard
  let subboard = superBoard.sboard[sRow][sCol];
  subboard.board[row][col] = currentValue;
  subboard.sum += currentValue;
  subboard.updateWinner();
  // Change the button's text content to current player
  button.textContent = currentPlayer;
  button.classList.add("used");
  if(currentPlayer === 'O'){
    button.setAttribute("data-player", "O"); // Set data-player attribute for player 'O'
  } else {
    button.setAttribute("data-player", "X"); // Set data-player attribute for player 'X'
  }
  button.disabled = true;
  // update the board winner
  superBoard.updateWinner();
  console.log('the sSum is ' + superBoard.sSum);
  // if the subboard winner has changed, update the superBoard winner as well
  if(subboard.winner !== null){
    if(superBoard.winner !== null){
      console.log('the final sSum is ' + superBoard.sSum);
      console.log(superBoard.winner + " is the winner");
      victory(superBoard.winner);
    } else {
      overrideButtons(sRow, sCol, superBoard.sboard[sRow][sCol].winner);
    }
  } 
  if (superBoard.winner === null) {
    if (superBoard.sboard[row][col].winner !== null){
      enableButtons(row, col, superBoard.sboard[row][col].winner);
    } else {
      disableButtons(row, col);
    }
  }
  
  changePlayer();
}

function overrideButtons(sRow, sCol, winner){
  const sRowStr = sRow.toString();
  const sColStr = sCol.toString();

  buttons.forEach((button) => {
    if (button.dataset.srow === sRowStr && button.dataset.scol === sColStr) {
      button.disabled = true;
      button.textContent = winner;
      button.classList.add("used");
      button.setAttribute("data-player", winner);
    }
  });
}

function enableButtons(sRow, sCol, winner) {
  // this function overrides every button inside the (sRow, sCol) board with the winning player character and enables every other button
  // Convert sRow and sCol to strings for comparison
  const sRowStr = sRow.toString();
  const sColStr = sCol.toString();

  buttons.forEach((button) => {
    if (button.dataset.srow === sRowStr && button.dataset.scol === sColStr) {
      button.disabled = true;
      button.textContent = winner;
      button.classList.add("used");
      button.setAttribute("data-player", winner);
    } else {
      // Disable buttons that don't match the criteria
      if (button.textContent === "") {
        // Enable buttons that match the criteria
        button.disabled = false;
      }
    }
  });
}

function disableButtons(sRow, sCol) {
  // this function disables every button that is not in the (sRow, sCol) board
  // Convert sRow and sCol to strings for comparison
  const sRowStr = sRow.toString();
  const sColStr = sCol.toString();

  buttons.forEach((button) => {
    if (button.dataset.srow === sRowStr && button.dataset.scol === sColStr) {
      if (button.textContent === "") {
        // Enable buttons that match the criteria
        button.disabled = false;
      }
    } else {
      // Disable buttons that don't match the criteria
      button.disabled = true;
    }
  });
}

function changePlayer() {
    if (currentValue === 1) {
        currentPlayer = 'O';
        currentValue = -1;
    } else {
        currentPlayer = 'X';
        currentValue = 1;
    }

    // Update the text on the webpage
    const activePlayerElement = document.getElementById('activePlayer');
    activePlayerElement.textContent = currentPlayer;
}

function victory(winner) {

  buttons.forEach((button) => {
    if (winner === 'tie') {
      button.textContent = "Tie";
    } else {
      button.textContent = winner;
      button.classList.add("used");
      button.setAttribute("data-player", winner);
    }
  });

  // Create a congratulatory message
  const message = document.createElement("p");

  if (winner === 'tie') {
    if(superBoard.sSum > 0){winner = 'X';} else {winner = 'O';}
    message.textContent = `It's a Tie! But Player ${winner} won more tiles!`;
  } else {
    message.textContent = `Congratulations, Player ${winner}! You are the winner!`;
  }

  // Append the message to the body or a specific element on your page
  document.body.appendChild(message);
}