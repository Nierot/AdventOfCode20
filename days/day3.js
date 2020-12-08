import { readLines } from '../util';
const colors = require('colors');

const puzzleInput = readLines('./input/dayThree');

const partOne = () => {
  let t0 = new Date().getTime();
  let treesEncountered = checkSlope(3, 1);
  let t1 = new Date().getTime();
  console.log('=========================='.rainbow);
  console.log('        Part One   '.red);
  console.log(`      Done in ${t1 - t0} ms`.red);
  console.log({ treesEncountered });
  console.log('=========================='.rainbow);
  return treesEncountered;
}

// Highlight tree, for debugging
const highlight = (string, index) => {
  let letter = string.substring(index, index + 1);
  return string.substring(0, index) + letter.red + string.substring(index + 1);
}

const checkSlope = (right, down) => {
  let x = 0;
  let y = 0;
  let treesEncountered = 0;

  while (y < puzzleInput.length) {
    if (puzzleInput[y][x] === '#') { //tree
      treesEncountered++;
    }
    y += down;
    x = (x + right) % puzzleInput[0].length;
  }
  return treesEncountered;
}

const partTwo = () => {
  let t0 = new Date().getTime();
  let treesEncountered = checkSlope(1, 1) * checkSlope(3, 1) * checkSlope(5, 1) * checkSlope(7, 1) * checkSlope(1, 2);
  let t1 = new Date().getTime();
  console.log('================================='.rainbow);
  console.log('           Part Two   '.red);
  console.log(`         Done in ${t1 - t0} ms`.red);
  console.log({ treesEncountered });
  console.log('================================='.rainbow);
}

partOne();
console.log();
partTwo();