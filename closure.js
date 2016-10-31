//Counter 1
// function counter() {
//   var count = 0;
//   function actuallyCount() {
//     count++;
//     return count;
//   }
//   return actuallyCount;
// }
//
// var count = counter();
// console.log(count());
// console.log(count());
// console.log(count());

Counter 2
function counter(num) {
  var count = num;
  function actuallyCount() {
    count++;
    return count;
  }
  return actuallyCount;
}

var count = counter(5);
console.log(count());
console.log(count());
console.log(count());



function newGame() {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];

  function fire(row, col) {
    if (board[row][col] === 'o') {
      board[row][col] = 'x';
      return 'Hit!';
    } else {
      return 'Miss';
    }
  }
  return fire;
}

var turn = newGame();
console.log(turn(0, 0));
console.log(turn(0, 2));
