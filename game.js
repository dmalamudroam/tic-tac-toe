const readline = require("readline");

const startBoard = `
|---|---|---|
| 1 | 2 | 3 |
|---|---|---|
| 4 | 5 | 6 |
|---|---|---|
| 7 | 8 | 9 |
|---|---|---|
             `;

let currentBoard = startBoard;

const coordinates = {
  '1': 17,
  '2': 21,
  '3': 25,
  '4': 45,
  '5': 49,
  '6': 53,
  '7': 73,
  '8': 77,
  '9': 81
};

let state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let currentPlayer = 'x';

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const updateState = (stringNum) => {
  const num = Number(stringNum) - 1;
  const array = Math.floor(num / 3);
  const index = num % 3;

  state[array][index] = currentPlayer;
}

const getInput = () => {
  console.clear();
  rl.question(`${currentBoard}\n${currentPlayer} to move (enter move in form of a number): `, (answer) => {
    let loc = coordinates[answer];
    currentBoard = currentBoard.replaceAt(loc, currentPlayer);
    //console.log(currentBoard);
    updateState(answer);
    const isWin = checkWin(currentPlayer);
    if (isWin) {
      console.clear();
      console.log(currentBoard);
      console.log(`\n${currentPlayer} WINS!!!\n`);
      console.log('NEW GAME? (y/n)')
      currentBoard = startBoard;
      currentPlayer = 'o';
    } else {
      if (currentPlayer === 'x') {
        currentPlayer = 'o';
      } else {
        currentPlayer = 'x';
      }
      getInput();
    }
  });
}

//Check win
var checkWin = (player) => {
  isRowWin = checkAllRows(player);
  isColWin = checkAllCols(player);
  isMajorDiagWin = checkMajorDiag(player);
  isMinorDiagWin = checkMinorDiag(player);
  return isRowWin || isColWin || isMajorDiagWin || isMinorDiagWin;
}
//check rows
var checkRow = (row, player) => {
  counter = 0;
  row.forEach((val) => {
    if (val === player) {
      counter++;
    }
  });
  return counter === 3;
}
var checkAllRows = (player) => {
  var result = false;
  state.forEach((row) => {
    result = checkRow(row, player) || result;
  });
  return result;
}
//Check Columns
var checkCol = (col, player) => {
  counter = 0;
  state.forEach((row) => {
    if (row[col] === player) {
      counter++;
    }
  });
  return counter === 3;
}
var checkAllCols = (player) => {
  var result = false;
  for (var i = 0; i < state.length; i++) {
    result = checkCol(i, player) || result;
  }
  return result;
}
//Check diags
var checkMajorDiag = (player) => {
  var counter = 0;
  for (var i = 0; i < state.length; i++) {
    if (state[i][i] === player) {
      counter++;
    }
  }
  return counter === 3;
}
var checkMinorDiag = (player) => {
  var counter = 0;
  var row = 0;
  for (var i = 2; i >= 0; i--) {
    if (state[row][i] === player) {
      counter++;
    }
    row++;
  }
  return counter === 3;
}

getInput();



