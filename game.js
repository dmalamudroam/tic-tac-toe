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

let state = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
let currentPlayer = 'x';

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getInput = () => {
rl.question(`${board}\n${currentPlayer} to move (enter move in form of a number): `, (answer) => {
  currentBoard = currentBoard.replaceAt
  console.log(player);
  if (!rowWin(0, player)) {
    getInput();
  } else {
    console.log(`${player} WINS`);
  }
  //console.log(board);
});
}

getInput();



