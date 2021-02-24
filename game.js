const startBoard = `
|---|---|---|
| 1 | 2 | 3 |
|---|---|---|
| 4 | 5 | 6 |
|---|---|---|
| 7 | 8 | 9 |
|---|---|---|
             `;

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

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

console.log(startBoard.indexOf('1'));
console.log(startBoard.indexOf('2'));
console.log(startBoard.indexOf('3'));
console.log(startBoard.indexOf('4'));
console.log(startBoard.indexOf('5'));
console.log(startBoard.indexOf('6'));
console.log(startBoard.indexOf('7'));
console.log(startBoard.indexOf('8'));
console.log(startBoard.indexOf('9'));



